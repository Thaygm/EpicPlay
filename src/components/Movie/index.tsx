import Tag from "../Tag";
import { Card, Title } from "./style";

type Props = {
  title: string;
  category: string;
  image: string;
};

const Movie = ({ title, category, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Title>{title}</Title>
    <Tag>{category}</Tag>
  </Card>
);

export default Movie;
