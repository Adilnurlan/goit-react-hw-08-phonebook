import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import AppBar from 'components/AppBar';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer>Made by GOit student Nurlan Adil (2023)</footer>
    </div>
  );
};
