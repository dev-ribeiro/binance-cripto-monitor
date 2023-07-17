import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { Criptos } from './pages/Criptos';
import { Home } from './pages/Home';

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

