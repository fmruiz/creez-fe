import { BtnEditBoard } from "../../common/Buttons/BtnEditBoard/BtnEditBoard";
import { EditBoardContainer, TopButtonsContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faCrop, faClone } from "@fortawesome/free-solid-svg-icons";

type Props = {};

export const EditBoard = (props: Props) => {
  // font icons
  const RotateLeft = <FontAwesomeIcon icon={faUndo} />;
  const FlipClone = <FontAwesomeIcon icon={faClone} />;
  const CropShape = <FontAwesomeIcon icon={faCrop} />;

  return (
    <EditBoardContainer>
      <TopButtonsContainer>
        <BtnEditBoard Component={RotateLeft} text="Rotate left" />
        <BtnEditBoard Component={FlipClone} text="Flip horizontal" />
        <BtnEditBoard Component={CropShape} text="Crop shape" />
      </TopButtonsContainer>
    </EditBoardContainer>
  );
};
