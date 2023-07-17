import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { Criptos } from './pages/criptos';
import { Home } from './pages/home';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/criptos" element={<Criptos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

