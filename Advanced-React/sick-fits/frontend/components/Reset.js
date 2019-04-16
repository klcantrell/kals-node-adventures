import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from '../components/User';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      email
      name
    }
  }
`;

const Reset = ({ resetToken }) => {
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  return (
    <Mutation
      mutation={RESET_MUTATION}
      variables={{ resetToken, password, confirmPassword }}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(resetPassword, { error, loading }) => {
        return (
          <Form
            method="POST"
            onSubmit={async e => {
              e.preventDefault();
              await resetPassword().catch(e => alert(e));
              setPassword('');
              setConfirmPassword('');
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Reset your password</h2>
              <Error error={error} />
              <label htmlFor="password">
                password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </label>
              <label htmlFor="confirmPassword">
                confirm password
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="confirmPassword"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </label>
              <button type="submit">Reset</button>
            </fieldset>
          </Form>
        );
      }}
    </Mutation>
  );
};

Reset.propTypes = {
  resetToken: PropTypes.string.isRequired,
};

export default Reset;
