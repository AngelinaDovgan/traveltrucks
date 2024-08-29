import { Suspense, lazy } from "react";

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
            <Route path="/catalog/:id" element={<MovieDetailsPage />}></Route>
          </Routes>
        </Suspense>
      </Layout>
    </div>
  )
}