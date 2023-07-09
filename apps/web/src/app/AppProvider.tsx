import { Button, ChakraProvider, Spinner } from '@chakra-ui/react';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';

function ErrorFallback() {
  return (
    <div>
      Oups, something went wrong.
      <Button onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </div>
  );
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary fallbackRender={ErrorFallback}>
        <ChakraProvider>
          <Router>{children}</Router>
        </ChakraProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
}
