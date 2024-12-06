import { Button, ButtonProps } from "@mui/material";
import { LinkProps } from "react-router-dom";
import React from "react";

type TextButtonProps = {
  children: React.ReactNode;
} & ButtonProps &
  Partial<LinkProps>;

const TextButton: React.FC<TextButtonProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Button color="success" variant="text" size="large" {...otherProps}>
      {children}
    </Button>
  );
};

export default TextButton;
