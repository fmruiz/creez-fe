import styled from "styled-components";

export const EditBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-color: ${p => p.theme.color.white_primary};
  border-radius: 0px;
  width: 800px;
  height: 500px;
  margin: 0 auto;
  color: white;
  margin-top: 30px;
`;

export const TopButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
`;
