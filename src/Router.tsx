import { Route, Routes } from "react-router-dom";
import { CriptoQueryContextProvider } from "./context/CriptoQueryContext";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";

export function Router() {
    return (
        <Routes>
            <CriptoQueryContextProvider>
                <Route path='/' element={<DefaultLayout />}>
                    <Route path='/' element={<Home />} />
                </Route>
            </CriptoQueryContextProvider>
        </Routes>
    )
}