import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/Auth/auth-selectors';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';

const Layout = () => {
  const token = useSelector(selectToken);

  return (
    <div>
      <header>{token ? <AuthMenu /> : <Navigation />}</header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer>Made by GOit student Nurlan Adil (2023)</footer>
    </div>
  );
};

export default Layout;
