import { QueryClientProvider } from 'react-query'
import { Router } from './Router';
import { CriptoQueryContextProvider } from './context/CriptoQueryContext';
import { queryClient } from './lib/query';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CriptoQueryContextProvider>
        <Router />
      </CriptoQueryContextProvider>
    </QueryClientProvider>
  );
}
