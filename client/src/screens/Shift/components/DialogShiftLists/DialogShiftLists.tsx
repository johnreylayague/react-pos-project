import React from "react";
import {
  styled,
  Theme,
  IconButton,
  List,
  Toolbar,
  Typography,
  IconButtonProps,
  TypographyProps,
  ToolbarProps,
  ListProps,
  Fade,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import ListItemShiftHistory from "../ListItemShiftHistory/ListItemShiftHistory";
import Loading from "../Loading/Loading";

const ButtonClose = styled(IconButton)<IconButtonProps>(({ theme }: { theme: Theme }) => ({
  marginLeft: `-${theme.spacing(1)}`,
}));

const ToolbarStyled = styled(Toolbar)<ToolbarProps>(({ theme }: { theme: Theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const DialogTitleText = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h6,
  marginLeft: theme.spacing(3),
}));

const ListStyled = styled(List)<ListProps>(({}: { theme?: Theme }) => ({
  overflowY: "auto",
}));

type DialogShiftListsProps = {
  title: string;
  onClose: () => void;
  onShowShiftReport: () => void;
};
const DialogShiftLists: React.FC<DialogShiftListsProps> = (props) => {
  const { onClose, onShowShiftReport, title } = props;
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      setIsLoading(true);
    };
  }, []);

  return (
    <>
      <ToolbarStyled>
        <ButtonClose onClick={onClose}>
          <CloseIcon />
        </ButtonClose>

        <DialogTitleText component="h6">{title}</DialogTitleText>
      </ToolbarStyled>

      <Loading isShow={isLoading} text="Loading..." />

      <Fade in={!isLoading}>
        <ListStyled disablePadding>
          {Array.from({ length: 50 }).map((_, index) => {
            return <ListItemShiftHistory key={index} onShowShiftReport={onShowShiftReport} />;
          })}
        </ListStyled>
      </Fade>
    </>
  );
};

export default DialogShiftLists;
