import React from "react";

type FavoriteDialogTabPanelProps = {
  children: React.ReactNode;
  value: number;
  index: number;
};

const FavoriteDialogTabPanel: React.FC<FavoriteDialogTabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

export default FavoriteDialogTabPanel;
