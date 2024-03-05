import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { GlobalCss } from "./styles";
import Header from "./components/Header";
import Banner from "./components/Banner";
// import Product from "./components/Product";
import ProductsList from "./components/ProductsList";
import Footer from "./components/Footer";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Banner />
        <ProductsList title="Novidades" background="gray" />
        <ProductsList title="Populares" background="black" />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
