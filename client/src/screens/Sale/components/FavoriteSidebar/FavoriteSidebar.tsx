import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { saleActions } from "../../../../store/sale-slice";
import {
  ContentWrapper,
  DescriptionText,
  FooterContainer,
  OpenWithRoundedIcon,
  SidebarContainer,
  TextWrapper,
  TitleText,
} from "./FavoriteSidebarStyles";

type FavoriteSidebarProps = {};

const FavoriteSidebar: React.FC<FavoriteSidebarProps> = (props) => {
  const {} = props;

  const dispatch = useDispatch();

  const handleOnCloseEdit = () => {
    dispatch(saleActions.handleOnCloseEdit());
  };

  return (
    <>
      <SidebarContainer>
        <ContentWrapper spacing={5}>
          <OpenWithRoundedIcon />

          <TextWrapper spacing={1}>
            <TitleText component={"div"} variant={"h4"}>
              Item layout setup
            </TitleText>

            <DescriptionText component={"div"} variant={"body1"}>
              Add your most used items and categories on the pages for fast access.
            </DescriptionText>
          </TextWrapper>
        </ContentWrapper>
      </SidebarContainer>

      <FooterContainer>
        <Button
          onClick={handleOnCloseEdit}
          variant="contained"
          color="success"
          size="large"
          disableElevation
          fullWidth
        >
          DONE
        </Button>
      </FooterContainer>
    </>
  );
};

export default FavoriteSidebar;
