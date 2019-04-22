import React from 'react';
import { Query } from 'react-apollo';
import { formatDistance } from 'date-fns';
import Link from 'next/link';
import styled from 'styled-components';
import gql from 'graphql-tag';
import formatMoney from '../lib/formatMoney';
import OrderItemStyles from './styles/OrderItemStyles';
import Error from './ErrorMessage';

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      items {
        id
        title
        price
        description
        quantity
        image
      }
    }
  }
`;

const OrderUl = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

const OrderList = () => {
  return (
    <Query query={USER_ORDERS_QUERY}>
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <Error error={error} />;
        return (
          <OrderUl>
            {data.orders.map(order => {
              return (
                <OrderItemStyles key={order.id}>
                  <Link
                    href={{
                      pathname: '/order',
                      query: { id: order.id },
                    }}
                  >
                    <a>
                      <div className="order-meta">
                        <p>
                          {order.items.reduce(
                            (tally, item) => tally + item.quantity,
                            0
                          )}{' '}
                          Item(s)
                        </p>
                        <p>{order.items.length} Product(s)</p>
                        <p>{formatDistance(order.createdAt, new Date())} ago</p>
                        <p>{formatMoney(order.total)}</p>
                      </div>
                      <div className="images">
                        {order.items.map(item => (
                          <img
                            key={item.id}
                            src={item.image}
                            alt={item.title}
                          />
                        ))}
                      </div>
                    </a>
                  </Link>
                </OrderItemStyles>
              );
            })}
          </OrderUl>
        );
      }}
    </Query>
  );
};

export default OrderList;