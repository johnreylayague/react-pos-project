import { Button, ButtonProps } from "@mui/material";
import React from "react";
import { LinkProps } from "react-router-dom";

type ContainedButtonProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
} & ButtonProps &
  Partial<LinkProps>;

const ContainedButton: React.FC<ContainedButtonProps> = (props) => {
  const { children, fullWidth = true, ...otherProps } = props;

  return (
    <Button color="success" variant="contained" size="large" fullWidth={fullWidth} {...otherProps}>
      {children}
    </Button>
  );
};

export default ContainedButton;
