import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import Error from '../components/ErrorMessage';
import Item from './Item';

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${({ theme }) => theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: 50% 10%;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeImage
    }
  }
`;

const SingleItem = ({ id }) => {
  return (
    <Query
      query={SINGLE_ITEM_QUERY}
      variables={{
        id,
      }}
    >
      {({ error, loading, data }) => {
        if (error) return <Error error={error} />;
        if (loading) return <p>Loading...</p>;
        const { item } = data;
        if (!item) return <p>No Item Found for {id}</p>;
        return (
          <SingleItemStyles>
            <Head>
              <title>Sick Fits | {item.title}</title>
            </Head>
            <img src={item.largeImage} alt={item.title} />
            <div className="details">
              <h2>Viewing {item.title}</h2>
              <p>{item.description}</p>
            </div>
          </SingleItemStyles>
        );
      }}
    </Query>
  );
};

export default SingleItem;
export { SINGLE_ITEM_QUERY };
