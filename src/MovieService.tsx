import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

export type MovieProps = {
  title: string;
  path: string;
};

const MovieFeed = () => {
  const [movies, setMovies] = useState<Array<MovieProps>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: "05f860293579d2794f23c2acbc080f22",
            },
          }
        );
        const responseMovies = new Array<MovieProps>();
        response.data.results.map(
          (m: { title: string; poster_path: string }) => {
            responseMovies.push({
              title: m.title,
              path: `https://image.tmdb.org/t/p/w500${m.poster_path}`,
            });
          }
        );
        console.log(responseMovies);
        setMovies(responseMovies);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Populares</h2>
      {/* <ul> */}
      <Grid
        style={{
          height: "400px",
        }}
        data={movies}
      >
        <Column field="path" title=" idMovie" width="100px" />
        <Column field="title" title=" titleMovie" width="40px" />
      </Grid>
      {/* </ul> */}
    </div>
  );
};

export default MovieFeed;
