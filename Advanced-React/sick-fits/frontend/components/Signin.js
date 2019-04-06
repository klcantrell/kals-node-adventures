import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

const Signin = () => {
  const [form, setForm] = React.useState({
    name: '',
    password: '',
    email: '',
  });

  const mergeNewFormState = newFormState => {
    setForm(form => ({
      ...form,
      ...newFormState,
    }));
  };

  const saveToState = e => {
    mergeNewFormState({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Mutation
      mutation={SIGNIN_MUTATION}
      variables={form}
      refetchQueries={[
        {
          query: CURRENT_USER_QUERY,
        },
      ]}
    >
      {(signin, { error, loading }) => {
        return (
          <Form
            method="POST"
            onSubmit={async e => {
              e.preventDefault();
              await signin().catch(e => console.log(e));
              mergeNewFormState({
                name: '',
                email: '',
                password: '',
              });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Sign into your account</h2>
              <Error error={error} />
              <label htmlFor="email">
                email
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={form.email}
                  onChange={saveToState}
                />
              </label>
              <label htmlFor="password">
                password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={form.password}
                  onChange={saveToState}
                />
              </label>
              <button type="submit">Sign In!</button>
            </fieldset>
          </Form>
        );
      }}
    </Mutation>
  );
};

export default Signin;
