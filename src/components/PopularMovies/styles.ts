import styled from "styled-components";
import { Colors } from "../../styles";
import { Card } from "../Movie/style";
import { StyleProps } from "./MovieService";

export const Container = styled.section<Omit<StyleProps, "title">>`
  padding: 32px 0;
  background-color: ${(StyleProps) =>
    StyleProps.background === "black" ? Colors.black : Colors.gray};

  ${Card} {
    background-color: ${(StyleProps) =>
      StyleProps.background === "black" ? Colors.gray : Colors.black};
  }
`;
