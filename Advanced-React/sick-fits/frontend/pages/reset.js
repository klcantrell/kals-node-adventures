import Link from 'next/link';
import Reset from '../components/Reset';

const ResetPage = ({ query }) => (
  <div>
    <Reset resetToken={query.resetToken} />
  </div>
);

export default ResetPage;
