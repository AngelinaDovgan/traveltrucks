import { Suspense, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const CampersDetailsPage = lazy(() => import("../../pages/CampersDetailsPage/CampersDetailsPage"));
const CampersFeatures = lazy(() => import("../CampersFeatures/CampersFeatures"));
const CampersReviews = lazy(() => import("../CampersReviews/CampersReviews"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));

export default function App() {
  return (
    <div>
      <Layout>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CampersDetailsPage/>} >
              <Route path="features" element={<CampersFeatures />} />
              <Route path="reviews" element={<CampersReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  )
}

