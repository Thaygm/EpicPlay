import styled from "styled-components";
import { Colors } from "../../styles";

import { TagProps } from ".";

export const TagContainer = styled.div<TagProps>`
  background-color: ${Colors.green};
  color: ${Colors.white};
  font-size: ${(TagProps) => (TagProps.size === "big" ? "16px" : "10px")};
  font-weight: bold;
  padding: ${(TagProps) => (TagProps.size === "big" ? "8px  16px" : "4px 6px")};
  border-radius: 8px;
`;
