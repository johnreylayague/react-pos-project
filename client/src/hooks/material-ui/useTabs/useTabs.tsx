import React from "react";

export type handleTabChange = (event: React.SyntheticEvent | null, newValue: number) => void;
export type tabIndex = number;

export const useTabs = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange: handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return { tabIndex, handleTabChange };
};
