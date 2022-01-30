import styled from "styled-components";

export const BtnEdit = styled.button`
  border: 1px solid;
  border-color: ${(p) => p.theme.color.white_primary};
  background-color: ${(p) => p.theme.color.background_app};
  padding: 5px 10px 5px 10px;
  margin-left: 5px;
  margin-right: 5px;

  svg {
    color: ${(p) => p.theme.color.white_primary};
  }
`;

export const BtnEditText = styled.span`
  color: ${(p) => p.theme.color.white_primary};
  margin-left: 5px;
`;
