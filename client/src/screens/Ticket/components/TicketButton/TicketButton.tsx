import React from "react";
import {
  ButtonWrapper,
  TicketButtonStyled,
  BadgeStyled,
  ConfirmationNumberIcon,
} from "./TicketButtonStyles";
import { Link } from "react-router-dom";

type TicketButtonProps = {
  label: string;
  link: string;
  badgeContent: number;
};
const TicketButton: React.FC<TicketButtonProps> = (props) => {
  const { label, badgeContent, link } = props;

  return (
    <ButtonWrapper>
      <TicketButtonStyled component={Link} to={link} relative={"path"}>
        {label}
        <BadgeStyled color="error" badgeContent={badgeContent} showZero>
          <ConfirmationNumberIcon />
        </BadgeStyled>
      </TicketButtonStyled>
    </ButtonWrapper>
  );
};

export default TicketButton;
