import { Nav } from './AuthNav.styled';
import { List } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <nav>
      <List>
        <li>
          <Nav to="/register">Register</Nav>
        </li>
        <li>
          <Nav to="/login">Login</Nav>
        </li>
      </List>
    </nav>
  );
};
