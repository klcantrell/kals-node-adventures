import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import gql from 'graphql-tag';
import Item from './Item';
import Pagination from './Pagination';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  min-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

const Items = ({ page }) => {
  return (
    <Center>
      <Pagination page={page} />
      <Query query={ALL_ITEMS_QUERY}>
        {({ data, error, loading }) => {
          if (error) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;
          return (
            <ItemsList>
              {data.items.map(item => (
                <Item item={item} key={item.id} />
              ))}
            </ItemsList>
          );
        }}
      </Query>
      <Pagination page={page} />
    </Center>
  );
};

export { ALL_ITEMS_QUERY };
export default Items;
