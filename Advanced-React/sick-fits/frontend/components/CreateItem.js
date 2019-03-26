import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from '../components/ErrorMessage';

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

const CreateItem = () => {
  const [item, setItem] = React.useState({
    title: 'Cool Shoes',
    description: 'Loving these',
    image: 'shoes.jpg',
    largeImage: 'largeShoes.jpg',
    price: 100000,
  });

  const handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    setItem({
      ...item,
      [name]: val,
    });
  };

  return (
    <Mutation mutation={CREATE_ITEM_MUTATION} variables={item}>
      {(createItem, { loading, error }) => (
        <Form
          onSubmit={async e => {
            e.preventDefault();
            const res = await createItem();
            Router.push({
              pathname: '/item',
              query: { id: res.data.createItem.id },
            });
          }}
        >
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
                value={item.description}
                onChange={handleChange}
              />
            </label>

            <button type="submit">Submit</button>
          </fieldset>
        </Form>
      )}
    </Mutation>
  );
};

export { CREATE_ITEM_MUTATION };
export default CreateItem;
