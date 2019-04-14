import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;

const AddToCart = ({ id }) => {
  return (
    <Mutation mutation={ADD_TO_CART_MUTATION} variables={{ id }}>
      {addToCart => <button onClick={addToCart}>Add to cart &#x1F6D2;</button>}
    </Mutation>
  );
};

export default AddToCart;
