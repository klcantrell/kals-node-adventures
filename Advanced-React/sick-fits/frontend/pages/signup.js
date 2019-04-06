import styled from 'styled-components';
import Signup from '../components/Signup';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const SignupPage = () => {
  return (
    <Columns>
      <Signup />
    </Columns>
  );
};

export default SignupPage;
