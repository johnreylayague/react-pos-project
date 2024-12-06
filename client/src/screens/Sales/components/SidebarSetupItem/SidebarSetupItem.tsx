import React from "react";
import {
  ButtonStyled,
  BoxStyled,
  BoxContainerStyled,
  TypographyTitleStyled,
  TypographyDescriptionStyled,
} from "./SidebarSetupItemStyles";
import { useDispatch } from "react-redux";
import { itemActions } from "../../../../store/item-slice";

interface SidebarSetupItemProps {}

const SidebarSetupItem: React.FC<SidebarSetupItemProps> = (props) => {
  const {} = props;

  const dispatch = useDispatch();
  const handleSetupItem = () => {
    dispatch(itemActions.handleToggleSetupItem());
  };

  return (
    <BoxContainerStyled>
      <BoxStyled>
        <TypographyTitleStyled variant="h4">Item layout setup</TypographyTitleStyled>
        <TypographyDescriptionStyled>
          Add your most used items and categories for fast access.
        </TypographyDescriptionStyled>
      </BoxStyled>
      <ButtonStyled variant="contained" onClick={handleSetupItem}>
        DONE
      </ButtonStyled>
    </BoxContainerStyled>
  );
};

export default SidebarSetupItem;
