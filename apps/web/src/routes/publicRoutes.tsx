import { Layout } from '~/components/common';
import { LoginPage } from '~/pages';

export const publicRoutes = [
  {
    path: 'login',
    element: (
      <Layout>
        <LoginPage />
      </Layout>
    ),
  },
];
