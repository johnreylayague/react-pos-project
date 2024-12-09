import React from "react";

export const useTabs = () => {
  const [tabIndex, setTabIndex] = React.useState<number>(0);

  const handleTabChange = (_event: React.SyntheticEvent | null, newValue: number) => {
    setTabIndex(newValue);
  };

  return { tabIndex, handleTabChange };
};
