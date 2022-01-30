import { BtnEdit, BtnEditText } from "./styles";

type Props = {
  text: string;
  Component?: JSX.Element;
  column?: boolean;
  nonBorder?: boolean;
};

export const BtnEditBoard = ({ text, Component, column, nonBorder }: Props) => {
  return (
    <BtnEdit
      style={{
        display: column ? "flex" : "flex",
        flexDirection: column ? "column" : "row",
        alignItems: column ? "center" : "center",
        justifyContent: column ? "center" : "center",
        width: column ? "70px" : "150px",
        height: column ? "70px" : "20px",
        borderWidth: nonBorder ? "0px" : "1px",
        padding: nonBorder ? '10px' : '0px'
      }}
    >
      {Component}
      <BtnEditText
        style={column ? { paddingTop: "5px" } : { paddingTop: "0px" }}
      >
        {text}
      </BtnEditText>
    </BtnEdit>
  );
};
