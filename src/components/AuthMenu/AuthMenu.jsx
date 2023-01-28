import { useSelector, useDispatch } from 'react-redux';
import { selectName } from 'redux/Auth/auth-selectors';
import { logout } from 'redux/Auth/auth-operations';

export const AuthMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);

  return (
    <div>
      <p>{`Welcome, ${name}`}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};
