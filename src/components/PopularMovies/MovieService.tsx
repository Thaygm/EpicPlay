import { useState, useEffect } from "react";
import { Container } from "./styles";
import axios from "axios";
import {
  Grid,
  GridCustomCellProps,
  GridColumn as Column,
} from "@progress/kendo-react-grid";

export type StyleProps = {
  title: string;
  background: "gray" | "black";
};

export type MovieProps = {
  title: string;
  path: string;
};

const MovieFeed = ({ background, title }: StyleProps) => {
  const [movies, setMovies] = useState<Array<MovieProps>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: "sua-chave-api-aqui",
            },
          }
        );
        const responseMovies: MovieProps[] = response.data.results
          .slice(0, 5)
          .map((m: { title: string; poster_path: string }) => ({
            title: m.title,
            path: `https://image.tmdb.org/t/p/w500${m.poster_path}`,
          }));

        setMovies(responseMovies);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <Grid
          style={{
            height: "400px",
            display: "grid",
          }}
          data={movies}
        >
          <Column field="path" title=" " width="100px" cell={PersonCell} />
          <Column field="path" title=" " width="100px" cell={PersonCell} />
          <Column field="path" title=" " width="100px" cell={PersonCell} />
          <Column field="path" title=" " width="100px" cell={PersonCell} />
        </Grid>
      </div>
    </Container>
  );
};

export const PersonCell = (props: GridCustomCellProps) => {
  const { dataItem } = props;

  if (!dataItem || !dataItem.path) {
    return null;
  }

  const imageDataUrl = `https://image.tmdb.org/t/p/w500${dataItem.path}`;
  return (
    <td {...props.tdProps}>
      <img
        src={imageDataUrl}
        width="350"
        height="350"
        className="movie-poster"
        style={{
          marginBottom: "10px",
          margin: "10px",
        }}
        alt={dataItem.title}
      />
      <span
        style={{
          display: "block",
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "bold",
        }}
        className="movie-name"
      >
        {dataItem.title}
      </span>
    </td>
  );
};

export default MovieFeed;
