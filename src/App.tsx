import { BrowserRouter } from 'react-router-dom';
import { CriptoQueryContextProvider } from './context/CriptoQueryContext';
import { Router } from './Router';

export default function App() {
  return (
    <BrowserRouter>
      <CriptoQueryContextProvider>
        <Router />
      </CriptoQueryContextProvider>
    </BrowserRouter>
  );
}
