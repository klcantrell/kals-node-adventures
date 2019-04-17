import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_ITEMS_QUERY } from './Items';
import { CURRENT_USER_QUERY } from './User';

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

const DeleteItem = ({ children, id }) => {
  const handleClick = deleteItemHandler => {
    if (confirm('Are you sure you want to delete this item?')) {
      deleteItemHandler().catch(err => {
        alert(err.message);
      });
    }
  };

  const update = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
    data.items = data.items.filter(
      item => item.id !== payload.data.deleteItem.id
    );
    cache.writeQuery({ query: ALL_ITEMS_QUERY, data });
  };

  return (
    <Mutation
      mutation={DELETE_ITEM_MUTATION}
      variables={{
        id,
      }}
      update={update}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(deleteItem, { error }) => (
        <button onClick={() => handleClick(deleteItem)}>{children}</button>
      )}
    </Mutation>
  );
};

export default DeleteItem;
