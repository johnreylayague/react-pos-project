import React from "react";
import {
  Box,
  Stack,
  ButtonBase,
  styled,
  Theme,
  BoxProps,
  ButtonBaseProps,
  StackProps,
  IconProps,
} from "@mui/material";
import { Image, Folder, CameraAlt } from "@mui/icons-material";

const ImageUploadContainer = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
}));

const BoxStyled = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  marginTop: theme.spacing(2),
  height: 150,
  width: 150,
  bgcolor: "red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
}));

const ButtonBaseStyled = styled(ButtonBase)<ButtonBaseProps>(({ theme }: { theme: Theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(1)}`,
}));

const StackStyled = styled(Stack)<StackProps>(({}: { theme: Theme }) => ({
  alignItems: "start",
}));

const ImageIconStyled = styled(Image)<IconProps>(({}: { theme: Theme }) => ({
  color: "#9e9e9e",
  fontSize: 50,
}));

const FolderIconStyled = styled(Folder)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: "#9e9e9e",
  marginRight: theme.spacing(2),
}));

const CameraAltIconStyled = styled(CameraAlt)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: "#9e9e9e",
  marginRight: theme.spacing(2),
}));

type ImageUploadActionsProps = {};
const ImageUploadActions: React.FC<ImageUploadActionsProps> = (props) => {
  const {} = props;
  return (
    <ImageUploadContainer>
      <BoxStyled>
        <ImageIconStyled />
      </BoxStyled>

      <StackStyled spacing={2.5}>
        <ButtonBaseStyled>
          <FolderIconStyled /> CHOOSE PHOTO
        </ButtonBaseStyled>

        <ButtonBaseStyled>
          <CameraAltIconStyled /> TAKE PHOTO
        </ButtonBaseStyled>
      </StackStyled>
    </ImageUploadContainer>
  );
};

export default ImageUploadActions;
