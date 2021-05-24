import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import Router from './routes';

const queryClient = new QueryClient();

/**
 * The main component that houses that app.
 * @return {component}
 */
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </div>
  );
}

export default App;
