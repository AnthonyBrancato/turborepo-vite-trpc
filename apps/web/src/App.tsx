import { AppProvider } from './app/AppProvider';
import { AppRoutes } from './routes/AppRoutes';

export function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
