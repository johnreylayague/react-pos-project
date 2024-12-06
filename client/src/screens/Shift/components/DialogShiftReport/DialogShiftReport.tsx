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
  Container,
  Divider,
  DividerProps,
  ListSubheader,
  ListSubheaderProps,
  ContainerProps,
} from "@mui/material";
import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import ListItemDetail from "../ListItemDetail/ListItemDetail";

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

const ListSubheaderStyled = styled(ListSubheader)<ListSubheaderProps>(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.success.main,
  })
);

const DividerStyled = styled(Divider)<DividerProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginLeft: `-${theme.spacing(2)}`,
    marginRight: `-${theme.spacing(2)}`,
  },
  marginLeft: `-${theme.spacing(3)}`,
  marginRight: `-${theme.spacing(3)}`,
}));

const ContainerStyled = styled(Container)<ContainerProps>(({}: { theme: Theme }) => ({
  overflowY: "auto",
}));

type DialogShiftReportProps = { title: string; onClose: () => void };
const DialogShiftReport: React.FC<DialogShiftReportProps> = (props) => {
  const { onClose, title } = props;

  return (
    <>
      <ToolbarStyled>
        <ButtonClose onClick={onClose}>
          <ArrowBackIcon />
        </ButtonClose>

        <DialogTitleText component="h6">{title}</DialogTitleText>
      </ToolbarStyled>

      <ContainerStyled>
        {/* Shift Overview */}
        <List>
          <ListItemDetail>Shift number: 11</ListItemDetail>
          <ListItemDetail secondary="11/17/24 11:09 PM">Shift opened: Owner</ListItemDetail>
          <ListItemDetail secondary="11/17/24 11:09 PM">Shift closed: Owner</ListItemDetail>
        </List>

        <DividerStyled />
        {/* Cash drawer */}
        <List subheader={<ListSubheaderStyled disableGutters>Cash drawer</ListSubheaderStyled>}>
          <ListItemDetail secondary="0.00">Starting cash</ListItemDetail>
          <ListItemDetail secondary="0.00">Cash payments</ListItemDetail>
          <ListItemDetail secondary="0.00">Cash refunds</ListItemDetail>
          <ListItemDetail secondary="0.00">Paid in</ListItemDetail>
          <ListItemDetail secondary="0.00">Paid out</ListItemDetail>
          <ListItemDetail secondary="0.00">Expected cash amount</ListItemDetail>
          <ListItemDetail secondary="0.00">Actual cash amount</ListItemDetail>
          <ListItemDetail secondary="0.00" primaryHighlight secondaryHighlight>
            Difference
          </ListItemDetail>
        </List>

        <DividerStyled />
        {/* Sales summary */}
        <List subheader={<ListSubheaderStyled disableGutters>Sales summary</ListSubheaderStyled>}>
          <ListItemDetail secondary="0.00" primaryHighlight secondaryHighlight>
            Gross sales
          </ListItemDetail>
          <ListItemDetail secondary="0.00">Refunds</ListItemDetail>
          <ListItemDetail secondary="0.00">Discounts</ListItemDetail>
          <Divider component={"li"} />
          <ListItemDetail secondary="0.00" primaryHighlight secondaryHighlight>
            Net sales
          </ListItemDetail>
        </List>
      </ContainerStyled>
    </>
  );
};

export default DialogShiftReport;
