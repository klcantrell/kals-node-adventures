import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Error from './ErrorMessage';
import Table from './styles/Table';
import SickButton from './styles/SickButton';

const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      name
      email
      permissions
    }
  }
`;

const possiblePermissions = [
  'ADMIN',
  'USER',
  'ITEMCREATE',
  'ITEMDELETE',
  'PERMISSIONSUPDATE',
];

const Permissions = () => (
  <Query query={ALL_USERS_QUERY}>
    {({ data, loading, error }) => {
      console.log(data);
      if (loading) return <p>Loading...</p>;
      return (
        <div>
          <Error error={error} />
          <div>
            <h2>Manage Permissions</h2>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  {possiblePermissions.map(permission => (
                    <th>{permission}</th>
                  ))}
                  <th />
                </tr>
              </thead>
              <tbody>
                {data.users.map(user => (
                  <User user={user} key={user.id} />
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      );
    }}
  </Query>
);

const User = ({ user }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      {possiblePermissions.map(permission => (
        <td>
          <label htmlFor={`${user.id}-permission-${permission}`}>
            <input type="checkbox" />
          </label>
        </td>
      ))}
      <td>
        <SickButton>UPDATE</SickButton>
      </td>
    </tr>
  );
};

export default Permissions;
