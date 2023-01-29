import { Navigation } from './Navigation/Navigation';
import { AuthMenu } from './AuthMenu/AuthMenu';
import { AuthNav } from './AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/Auth/auth-selectors';

export default function AppBar() {
  const token = useSelector(selectToken);

  return (
    <header>
      <Navigation />
      {token ? <AuthMenu /> : <AuthNav />}
    </header>
  );
}
