import { Nav } from './Navigation.styled';
import { List } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <List>
        <li>
          <Nav to="/" end>
            Home
          </Nav>
        </li>
        <li>
          <Nav to="/register">Register</Nav>
        </li>
        <li>
          <Nav to="/login">Login</Nav>
        </li>
        <li>
          <Nav to="/contacts">Contacts</Nav>
        </li>
      </List>
    </nav>
  );
};
