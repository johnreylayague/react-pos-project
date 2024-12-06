import { OpenWithRounded } from "@mui/icons-material";
import {
  Box,
  Stack,
  Typography,
  Button,
  styled,
  Theme,
  BoxProps,
  StackProps,
  IconProps,
  TypographyProps,
} from "@mui/material";
import React from "react";

const SidebarContainer = styled(Box)<BoxProps>(({}: { theme: Theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const FooterContainer = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  padding: theme.spacing(2),
}));

const ContentWrapper = styled(Stack)<StackProps>(({ theme }: { theme: Theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
}));

const OpenWithRoundedIcon = styled(OpenWithRounded)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.grey[400],
  fontSize: theme.spacing(15),
}));

const TextWrapper = styled(Stack)<StackProps>(({}: { theme: Theme }) => ({
  textAlign: "center",
}));

const TitleText = styled(Typography)<TypographyProps>(({}: { theme: Theme }) => ({}));

const DescriptionText = styled(Typography)<TypographyProps>(({}: { theme: Theme }) => ({}));

type FavoriteSidebarProps = {
  onCloseEditMode: () => void;
};

const FavoriteSidebar: React.FC<FavoriteSidebarProps> = (props) => {
  const { onCloseEditMode } = props;

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
          onClick={onCloseEditMode}
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
