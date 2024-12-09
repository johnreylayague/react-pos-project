import {
  Container,
  Paper,
  Divider,
  Box,
  styled,
  Theme,
  BoxProps,
  List,
  ListSubheader,
  ListSubheaderProps,
  DividerProps,
  PaperProps,
  ListProps,
  CSSObject,
  ContainerProps,
} from "@mui/material";
import React from "react";
import OutlinedButton from "../../../../components/common/elements/Button/OutlinedButton/OutlinedButton";
import ListItemDetail from "../ListItemDetail/ListItemDetail";
import { Link } from "react-router-dom";

const PaperStyled = styled(Paper)<PaperProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    boxShadow: "none",
    paddingLeft: 0,
    paddingRight: 0,
  } as CSSObject,
  boxShadow: theme.shadows[3],
  padding: `${theme.spacing(3)} ${theme.spacing(3)} ${theme.spacing(1)} ${theme.spacing(3)}`,
}));

const ContainerStyled = styled(Container)<ContainerProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: 0,
    marginBottom: 0,
  } as CSSObject,
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

const BoxStyled = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  } as CSSObject,
  display: "flex",
  gap: theme.spacing(3),
}));

const ListStyled = styled(List)<ListProps>(({ theme }: { theme: Theme }) => ({
  marginTop: theme.spacing(1),
}));

const ListSubheaderStyled = styled(ListSubheader)<ListSubheaderProps>(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.success.main,
  })
);

const DividerStyled = styled(Divider)<DividerProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginRight: `-${theme.spacing(2)}`,
    marginLeft: `-${theme.spacing(2)}`,
  } as CSSObject,
  marginRight: `-${theme.spacing(3)}`,
  marginLeft: `-${theme.spacing(3)}`,
}));

type ShiftManagementPanelProps = {
  onCloseShift: () => void;
};

const ShiftManagementPanel: React.FC<ShiftManagementPanelProps> = (props) => {
  const { onCloseShift } = props;

  return (
    <ContainerStyled maxWidth="md">
      <PaperStyled>
        {/* Action Buttons */}
        <BoxStyled>
          <OutlinedButton component={Link} to={"cash-management"} relative="path">
            CASH MANAGEMENT
          </OutlinedButton>
          <OutlinedButton onClick={onCloseShift}>CLOSE SHIFT</OutlinedButton>
        </BoxStyled>

        {/* Shift Info */}
        <ListStyled>
          <ListItemDetail>Shift number: 12</ListItemDetail>
          <ListItemDetail secondary="11/18/24 12:07 AM">Shift opened: Owner</ListItemDetail>
        </ListStyled>

        <DividerStyled />

        {/* Cash drawer */}
        <List subheader={<ListSubheaderStyled disableGutters>Cash drawer</ListSubheaderStyled>}>
          <ListItemDetail secondary="0.00">Starting cash</ListItemDetail>
          <ListItemDetail secondary="0.00">Cash payments</ListItemDetail>
          <ListItemDetail secondary="0.00">Cash refunds</ListItemDetail>
          <ListItemDetail secondary="0.00">Paid in</ListItemDetail>
          <ListItemDetail secondary="0.00">Paid out</ListItemDetail>
          <ListItemDetail secondary="0.00" primaryHighlight secondaryHighlight>
            Expected cash amount
          </ListItemDetail>
        </List>

        <DividerStyled />

        {/* Sales summary */}
        <List subheader={<ListSubheaderStyled disableGutters>Sales summary</ListSubheaderStyled>}>
          <ListItemDetail secondary="0.00" primaryHighlight secondaryHighlight>
            Gross sales
          </ListItemDetail>
          <ListItemDetail secondary="0.00">Refund</ListItemDetail>
          <ListItemDetail secondary="0.00">Discounts</ListItemDetail>
        </List>

        <Divider />

        {/* Net sales and Cash */}
        <List>
          <ListItemDetail secondary="0.00" primaryHighlight>
            Net sales
          </ListItemDetail>
          <ListItemDetail secondary="0.00">Cash</ListItemDetail>
        </List>
      </PaperStyled>
    </ContainerStyled>
  );
};

export default ShiftManagementPanel;
