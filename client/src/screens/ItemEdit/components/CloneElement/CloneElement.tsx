import React from "react";

type CloneElementProps = {
  baseElement: React.ReactNode;
  children?: React.ReactNode;
  baseElementProps?: Record<string, any>;
};

const CloneElement: React.FC<CloneElementProps> = ({ baseElement, baseElementProps, children }) => {
  return React.cloneElement(baseElement as React.ReactElement, { ...baseElementProps }, children);
};

export default CloneElement;
