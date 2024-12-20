import { CameraAlt, Close, Delete, Folder, Image } from "@mui/icons-material";
import {
  Box,
  BoxProps,
  IconProps,
  ButtonBase,
  ButtonBaseProps,
  styled,
  Theme,
  Button,
  ButtonProps,
  IconButton,
  IconButtonProps,
  DialogActionsProps,
  DialogActions,
  Dialog,
  DialogProps,
  AvatarProps,
  Avatar,
  StackProps,
  Stack,
} from "@mui/material";

export const BoxStyled = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: theme.spacing(3),
}));

export const DeleteIconStyled = styled(Delete)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: "#757575",
  marginRight: theme.spacing(1),
}));

export const WebcamButton = styled(Button)<ButtonProps>(({}: { theme: Theme }) => ({
  color: "#9e9e9e",
}));

export const CameraAltIcon = styled(CameraAlt)<IconProps>(({}: { theme: Theme }) => ({
  color: "#9e9e9e",
}));

export const ProgressContainer = styled(Box)<BoxProps>(({}: { theme: Theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
}));

export const DeleteActionButton = styled(ButtonBase)<ButtonBaseProps>(
  ({ theme }: { theme: Theme }) => ({
    [theme.breakpoints.down("sm")]: {
      borderRadius: 0,
    },
    width: "100%",
    padding: `${theme.spacing(1.142)} ${theme.spacing(3)}`,
    boxShadow: theme.shadows[3],
    backgroundColor: theme.palette.background.paper,
  })
);

export const RightAlignedContainer = styled(Box)<BoxProps>(({}: { theme: Theme }) => ({
  flexGrow: 1,
  textAlign: "right",
}));

export const CloseButton = styled(IconButton)<IconButtonProps>(({ theme }: { theme: Theme }) => ({
  marginRight: `-${theme.spacing(1)}`,
}));

export const CloseIcon = styled(Close)<IconProps>(({}: { theme: Theme }) => ({}));

export const DialogActionsStyled = styled(DialogActions)<DialogActionsProps>(
  ({}: { theme: Theme }) => ({ display: "flex", justifyContent: "center", alignItems: "center" })
);

export const WebcamDialog = styled(Dialog)<DialogProps>(({}: { theme: Theme }) => ({}));

export const ImageIcon = styled(Image)<IconProps>(({ theme }: { theme: Theme }) => ({
  fontSize: theme.spacing(6),
  color: "#9e9e9e",
}));

export const AvatarStyled = styled(Avatar)<AvatarProps>(({}: { theme: Theme }) => ({
  backgroundColor: "#f5f5f5",
  height: 150,
  width: 150,
}));

export const ActionStack = styled(Stack)<StackProps>(({}: { theme: Theme }) => ({
  justifyContent: "center",
  alignItems: "start",
}));

export const ChoosePhotoFolderIcon = styled(Folder)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: "#9e9e9e",
  marginRight: theme.spacing(2),
}));

export const ChoosePhotoButton = styled(Button)<ButtonProps>(({}: { theme: Theme }) => ({
  borderRadius: 0,
  color: "#000",
}));

export const TakePhotoButton = styled(Button)<ButtonProps>(({}: { theme: Theme }) => ({
  borderRadius: 0,
  color: "#000",
}));

export const TakePhotoCameraAltIcon = styled(CameraAlt)<IconProps>(
  ({ theme }: { theme: Theme }) => ({
    color: "#9e9e9e",
    marginRight: theme.spacing(2),
  })
);

export const ImageContainer = styled(Stack)<StackProps>(({ theme }: { theme: Theme }) => ({
  marginTop: theme.spacing(2),
}));

export const RemoveImageButton = styled(IconButton)<IconButtonProps>(
  ({ theme }: { theme: Theme }) => ({
    position: "absolute",
    top: theme.spacing(0.7),
    left: theme.spacing(0.7),
    zIndex: 1,
    backgroundColor: "#fff",
    ":hover": {
      backgroundColor: "#fff",
    },
  })
);

export const ImageWrapper = styled(Box)<BoxProps>(({}: { theme: Theme }) => ({
  position: "relative",
}));
