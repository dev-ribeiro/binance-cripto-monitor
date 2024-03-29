import { QueryClientProvider } from 'react-query'
import { Router } from './Router';
import { CriptoQueryContextProvider } from './hooks/useCriptoQuery';
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
