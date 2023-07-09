import { Spinner } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from '~/components/common';
import { DashboardPage, NotFoundPage } from '~/pages';

const App = () => {
  return (
    <Layout>
      <React.Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <Spinner size="xl" />
          </div>
        }
      >
        <Outlet />
      </React.Suspense>
    </Layout>
  );
};

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];
