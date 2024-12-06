import React from "react";
import CustomTabPabel from "../TabPanel/CustomTabPanel";
import ItemList from "../ItemList/ItemList.tsx";
import FavoriteList from "../FavoriteList/FavoriteList.tsx";
import { BoxStyled } from "./MainContentAreaStyles";
import { useSelector } from "react-redux";
import { storeProps } from "../../../../store";

type MainContentAreaState = {};

const MainContentArea: React.FC<MainContentAreaState> = (props: MainContentAreaState) => {
  const {} = props;

  const selectedTab = useSelector((state: storeProps) => state.tabPanel.selectedTab);

  return (
    <>
      <BoxStyled>
        <CustomTabPabel index={0} value={selectedTab}>
          <FavoriteList />
        </CustomTabPabel>
        <CustomTabPabel index={1} value={selectedTab}>
          <ItemList />
        </CustomTabPabel>
      </BoxStyled>
    </>
  );
};

export default MainContentArea;
