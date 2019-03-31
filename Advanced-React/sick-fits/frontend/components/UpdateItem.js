import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from '../components/ErrorMessage';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      price
    }
  }
`;

const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $price: Int
  ) {
    updateItem(
      id: $id
      title: $title
      description: $description
      price: $price
    ) {
      id
      title
      description
      price
    }
  }
`;

const UpdateItem = ({ id }) => {
  const [item, setItem] = React.useState({});

  const handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    setItem({
      ...item,
      [name]: val,
    });
  };

  const handleSubmit = async (e, updateItemHandler) => {
    e.preventDefault();
    const res = await updateItemHandler({
      variables: {
        id,
        ...item,
      },
    });
    Router.push({
      pathname: '/item',
      query: { id: res.data.updateItem.id },
    });
  };

  return (
    <Query query={SINGLE_ITEM_QUERY} variables={{ id }}>
      {({ data, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (!data.item) return <p>No item found for ID</p>;
        return (
          <Mutation mutation={UPDATE_ITEM_MUTATION} variables={item}>
            {(updateItem, { loading, error }) => (
              <Form onSubmit={e => handleSubmit(e, updateItem)}>
                <fieldset disabled={loading} aria-busy={loading}>
                  <Error error={error} />
                  <label htmlFor="title">
                    Title
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Title"
                      required
                      defaultValue={data.item.title}
                      value={item.title}
                      onChange={handleChange}
                    />
                  </label>

                  <label htmlFor="price">
                    Price
                    <input
                      type="number"
                      id="price"
                      name="price"
                      placeholder="Price"
                      required
                      defaultValue={data.item.price}
                      value={item.price}
                      onChange={handleChange}
                    />
                  </label>

                  <label htmlFor="description">
                    Description
                    <textarea
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Enter a Description"
                      required
                      defaultValue={data.item.description}
                      value={item.description}
                      onChange={handleChange}
                    />
                  </label>

                  <button type="submit">
                    Sav{loading ? 'ing' : 'e'} Changes
                  </button>
                </fieldset>
              </Form>
            )}
          </Mutation>
        );
      }}
    </Query>
  );
};

export { UPDATE_ITEM_MUTATION };
export default UpdateItem;
