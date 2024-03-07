import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { GlobalCss } from "./styles";
import Header from "./components/Header";
import Banner from "./components/Banner";
// import Movie from "./components/Movie";
import MoviesList from "./components/MoviesList";
import MovieFeed from "./components/PopularMovies/MovieService";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Banner />
        <MoviesList title="Novidades" background="gray" />
        <MovieFeed title="Populares" background="black" />
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
