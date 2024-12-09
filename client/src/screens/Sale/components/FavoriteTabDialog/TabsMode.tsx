import React from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import { TabsStyled, SearchButton, TabStyled } from "./TabsModeStyles";

type TabsModeProps = {
  tabIndex: number;
  onTabChange: (event: React.SyntheticEvent | null, newValue: number) => void;
  onOpenSearch: () => void;
};
const TabsMode: React.FC<TabsModeProps> = (props) => {
  const { onTabChange, onOpenSearch, tabIndex } = props;

  return (
    <>
      <TabsStyled value={tabIndex} onChange={onTabChange} aria-label="basic tabs example" centered>
        <TabStyled label="ITEMS" id={`simple-tab${0}`} aria-controls={`simple-tabpanel-${0}`} />

        <TabStyled
          label="CATEGORIES"
          id={`simple-tab${1}`}
          aria-controls={`simple-tabpanel-${1}`}
        />
      </TabsStyled>

      <SearchButton onClick={onOpenSearch}>
        <SearchIcon />
      </SearchButton>
    </>
  );
};

export default TabsMode;
