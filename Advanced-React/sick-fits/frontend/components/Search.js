import React from 'react';
import Downshift from 'downshift';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchTerm: String!) {
    items(
      where: {
        OR: [
          { title_contains: $searchTerm }
          { description_contains: $searchTerm }
        ]
      }
    ) {
      id
      image
      title
    }
  }
`;

const AutoComplete = () => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleChange = debounce(async (e, client) => {
    setLoading(true);
    console.log('Searching...');
    const res = await client.query({
      query: SEARCH_ITEMS_QUERY,
      variables: { searchTerm: e.target.value },
    });
    setItems(res.data.items);
    setLoading(false);
  }, 350);

  return (
    <SearchStyles>
      <div>
        <ApolloConsumer>
          {client => (
            <input
              type="search"
              onChange={e => {
                handleChange(e.nativeEvent, client);
              }}
            />
          )}
        </ApolloConsumer>
        <DropDown>
          {items.map(item => (
            <DropDownItem>
              <img width="50" src={item.image} alt={item.title} key={item.id} />
              {item.title}
            </DropDownItem>
          ))}
        </DropDown>
      </div>
    </SearchStyles>
  );
};

export default AutoComplete;
