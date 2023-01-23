import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
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
