import { useSelector, useDispatch } from 'react-redux';
import { selectName } from 'redux/Auth/auth-selectors';
import { logout } from 'redux/Auth/auth-operations';
import { P, Div, Button } from './AuthMenu.styled';

export const AuthMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);

  return (
    <Div>
      <P>{`Welcome, ${name}`}</P>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </Div>
  );
};
