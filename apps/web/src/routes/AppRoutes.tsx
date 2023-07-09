import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Layout } from '~/components/common';
import { LandingPage, NotFoundPage } from '~/pages';
import { protectedRoutes } from './protectedRoutes';
import { publicRoutes } from './publicRoutes';

export function AppRoutes() {
  const isLogged = false;

  const commonRoutes = [
    {
      path: '/',
      element: (
        <Layout>
          <LandingPage />
        </Layout>
      ),
    },
  ];

  const routes = isLogged ? protectedRoutes : publicRoutes;

  const element = useRoutes([
    ...routes,
    ...commonRoutes,
    {
      path: '*',
      element: <NotFoundPage parent />,
    },
  ]);

  return <React.Fragment>{element}</React.Fragment>;
}
