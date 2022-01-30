import { BtnEdit, BtnEditText } from "./styles";

type Props = {
  text: string;
  Component?: JSX.Element;
  column?: boolean;
};

export const BtnEditBoard = ({ text, Component, column }: Props) => {
  return (
    <BtnEdit
      style={column ? { flexDirection: "column" } : { flexDirection: "row" }}
    >
      {Component}
      <BtnEditText>{text}</BtnEditText>
    </BtnEdit>
  );
};
