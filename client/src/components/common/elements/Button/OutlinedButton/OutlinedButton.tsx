import { Button, ButtonProps } from "@mui/material";
import { LinkProps } from "react-router-dom";
import React from "react";

type PrimaryButtonProps = {
  children: React.ReactNode;
} & ButtonProps &
  Partial<LinkProps>;

const OutlinedButton: React.FC<PrimaryButtonProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <>
      <Button variant={"outlined"} color={"success"} size={"large"} fullWidth {...otherProps}>
        {children}
      </Button>
    </>
  );
};

export default OutlinedButton;
