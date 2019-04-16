import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

const RequestReset = () => {
  const [email, setEmail] = React.useState('');

  return (
    <Mutation mutation={REQUEST_RESET_MUTATION} variables={{ email }}>
      {(requestReset, { error, loading, called }) => {
        return (
          <Form
            method="POST"
            onSubmit={async e => {
              e.preventDefault();
              await requestReset().catch(e => alert(e));
              setEmail('');
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Request a password reset</h2>
              <Error error={error} />
              {!loading && !error && called && (
                <p>Success! Check your e-mail for a reset link</p>
              )}
              <label htmlFor="email">
                email
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </label>
              <button type="submit">Request Reset</button>
            </fieldset>
          </Form>
        );
      }}
    </Mutation>
  );
};

export default RequestReset;
