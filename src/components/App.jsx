import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/Auth/auth-operations';
import { selectIsFetchingCurrentUser } from 'redux/Auth/auth-selectors';

import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { PublicRoute } from 'HOCs/PublicRoute';
import { PrivatRoute } from 'HOCs/PrivatRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isfetchCurrentUser = useSelector(selectIsFetchingCurrentUser);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isfetchCurrentUser && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivatRoute>
                  <ContactsPage />
                </PrivatRoute>
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};
