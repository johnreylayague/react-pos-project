import React from "react";
import { ButtonWrapper, ChargeButtonStyled, Label } from "./ChargeButtonStyles";
import { Link } from "react-router-dom";

type ChargeButtonProps = {};
const ChargeButton: React.FC<ChargeButtonProps> = (props) => {
  const {} = props;

  return (
    <ButtonWrapper>
      <ChargeButtonStyled component={Link} to={"charge"} relative="path" disableElevation>
        <Label secondary={"₱0.02"}>CHARGE</Label>
      </ChargeButtonStyled>
    </ButtonWrapper>
  );
};

export default ChargeButton;
