import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

const Signup = () => {
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
      mutation={SIGNUP_MUTATION}
      variables={form}
      refetchQueries={[
        {
          query: CURRENT_USER_QUERY,
        },
      ]}
    >
      {(signup, { error, loading }) => {
        return (
          <Form
            method="POST"
            onSubmit={async e => {
              e.preventDefault();
              await signup().catch(e => alert(e));
              mergeNewFormState({
                name: '',
                email: '',
                password: '',
              });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Sign up for an account</h2>
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
              <label htmlFor="name">
                name
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  value={form.name}
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
              <button type="submit">Sign Up!</button>
            </fieldset>
          </Form>
        );
      }}
    </Mutation>
  );
};

export default Signup;
export { SIGNUP_MUTATION };
