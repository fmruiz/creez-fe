import { BtnEditBoard } from "../../common/Buttons/BtnEditBoard/BtnEditBoard";
import {
  EditBoardContainer,
  LeftButtonsContainer,
  TopButtonsContainer,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUndo,
  faCrop,
  faClone,
  faShapes,
  faSlidersH,
  faPen,
  faBorderStyle,
} from "@fortawesome/free-solid-svg-icons";

type Props = {};

export const EditBoard = (props: Props) => {
  // font icons
  const RotateLeft = <FontAwesomeIcon icon={faUndo} />;
  const FlipClone = <FontAwesomeIcon icon={faClone} />;
  const CropShape = <FontAwesomeIcon icon={faCrop} />;
  const FilterShape = <FontAwesomeIcon icon={faShapes} />;
  const FinetuneSliders = <FontAwesomeIcon icon={faSlidersH} />;
  const AnnotatePen = <FontAwesomeIcon icon={faPen} />;
  const FrameBorder = <FontAwesomeIcon icon={faBorderStyle} />;

  return (
    <EditBoardContainer>
      <TopButtonsContainer>
        <BtnEditBoard Component={RotateLeft} text="Rotate left" nonBorder />
        <BtnEditBoard Component={FlipClone} text="Flip horizontal" nonBorder />
        <BtnEditBoard Component={CropShape} text="Crop shape" nonBorder />
      </TopButtonsContainer>
      <LeftButtonsContainer>
        <BtnEditBoard Component={FilterShape} text="Filter" column />
        <BtnEditBoard Component={FinetuneSliders} text="Finetune" column />
        <BtnEditBoard Component={AnnotatePen} text="Annotate" column />
        <BtnEditBoard Component={FrameBorder} text="Frame" column />
      </LeftButtonsContainer>
    </EditBoardContainer>
  );
};
