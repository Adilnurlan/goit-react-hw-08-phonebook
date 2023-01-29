import { useSelector } from 'react-redux';
import { selectToken } from '../redux/Auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export const PrivatRoute = ({ children }) => {
  const token = useSelector(selectToken);
  return token ? children : <Navigate to="/login" />;
};
