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
    image: '',
    largeImage: '',
    price: 100000,
    uploadError: false,
  });

  const handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    setItem({
      ...item,
      [name]: val,
    });
  };

  const handleSubmit = async (e, createItemHandler) => {
    e.preventDefault();
    if (item.image) {
      setItem({
        ...item,
        uploadError: false,
      });
      const res = await createItemHandler();
      Router.push({
        pathname: '/items',
        query: { id: res.data.createItem.id },
      });
    } else {
      setItem({
        ...item,
        uploadError: true,
      });
    }
  };

  const uploadFile = async e => {
    setItem({
      ...item,
      image: '',
      largeImage: '',
    });

    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'sickfits');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/kalalau/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    const file = await res.json();
    setItem({
      ...item,
      image: file.secure_url,
      largeImage: file.eager[0].secure_url,
    });
  };

  return (
    <Mutation mutation={CREATE_ITEM_MUTATION} variables={item}>
      {(createItem, { loading, error }) => (
        <Form onSubmit={e => handleSubmit(e, createItem)}>
          <fieldset disabled={loading} aria-busy={loading}>
            <Error error={error} uploadNotReady={item.uploadError} />
            <label htmlFor="file">
              Image
              <input
                type="file"
                id="file"
                name="file"
                placeholder="Upload an image"
                required
                onChange={uploadFile}
              />
            </label>

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
