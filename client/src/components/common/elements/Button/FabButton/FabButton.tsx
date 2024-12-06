import React from "react";
import { FabStyled } from "./FabButtonStyles";
import { FabProps } from "@mui/material";
import { LinkProps } from "react-router-dom";

type FabButtonProps = {
  children: React.ReactNode;
} & FabProps &
  Partial<LinkProps>;
const FabButton: React.FC<FabButtonProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <>
      <FabStyled color="success" size="large" {...otherProps}>
        {children}
      </FabStyled>
    </>
  );
};

export default FabButton;
