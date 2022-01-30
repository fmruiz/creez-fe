import styled from "styled-components";

export const EditBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-color: ${(p) => p.theme.color.black_light};
  border-radius: 0px;
  width: 1200px;
  height: 700px;
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

export const LeftButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 20%;
`;
