import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./layouts/Layouts";

const IndexPage = lazy(() => import("./views/IndexPage"))
const FavoritesPage = lazy(() => import("./views/FavoritesPage"))

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={
            <Suspense fallback="Cargando..." >
            <IndexPage/>
          </Suspense>
          } />
          <Route path="/favorites" element={
            <Suspense fallback="Cargando..." >
              <FavoritesPage/>
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
