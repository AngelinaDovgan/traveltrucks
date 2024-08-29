import { Suspense, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';


const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));

export default function App() {
  return (
    <div>
      <Layout>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
           
          </Routes>
        </Suspense>
      </Layout>
    </div>
  )
}


//  <Route path="/catalog/:id" element={<MovieDetailsPage />}>
// </Route>