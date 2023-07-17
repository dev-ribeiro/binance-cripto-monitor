import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { CriptoQueryContextProvider } from './context/CriptoQueryContext';
import { queryClient } from './lib/query';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CriptoQueryContextProvider>
          <Router />
        </CriptoQueryContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
