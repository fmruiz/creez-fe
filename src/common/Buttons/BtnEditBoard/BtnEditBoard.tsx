import { BtnEdit, BtnEditText } from "./styles";

type Props = {
  text: string;
};

export const BtnEditBoard = ({ text }: Props) => {
  return (
    <BtnEdit>
      <BtnEditText>{text}</BtnEditText>
    </BtnEdit>
  );
};
