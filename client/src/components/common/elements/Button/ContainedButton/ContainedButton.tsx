import { Button } from "@mui/material";
import React from "react";

type ContainedButtonProps = {
  children: React.ReactNode;
};
const ContainedButton: React.FC<ContainedButtonProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Button color="success" variant="contained" size="large" fullWidth {...otherProps}>
      {children}
    </Button>
  );
};

export default ContainedButton;
