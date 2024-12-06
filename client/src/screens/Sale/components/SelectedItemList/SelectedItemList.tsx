import {
  Box,
  BoxProps,
  Button,
  Divider,
  DividerProps,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemTextProps,
  ListProps,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";
import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

const Quantity = styled("span")<HTMLAttributes<HTMLSpanElement>>(({ theme }) => ({
  color: "red",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(3),
  flexShrink: 0,
}));

const ListStyled = styled(List)<ListProps>(({}) => ({
  overflowY: "auto",
}));

const Detail = styled(ListItemText)<ListItemTextProps>(({}) => ({
  "& .MuiListItemText-primary": { display: "flex" },
}));

const Price = styled(ListItemText)<ListItemTextProps>(({}) => ({
  textAlign: "right",
  flexShrink: 0,
}));

const Label = styled(ListItemText)<ListItemTextProps>(({}) => ({
  "& .MuiListItemText-primary": { fontWeight: "bold" },
}));

const TotalPrice = styled(ListItemText)<ListItemTextProps>(({}) => ({
  "& .MuiListItemText-primary": { fontWeight: "bold", textAlign: "right" },
}));

const DividerStyled = styled(Divider)<DividerProps>(({ theme }) => ({
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
}));

const ItemName = styled(Typography)<TypographyProps>(({}) => ({}));

const ActionBox = styled(Box)<BoxProps>(({ theme }) => ({
  padding: `0 ${theme.spacing(2)} ${theme.spacing(2)}`,
  marginTop: "auto",
}));

type SelectedItemListProps = {
  onOpenDialog: () => void;
};
const SelectedItemList: React.FC<SelectedItemListProps> = (props) => {
  const { onOpenDialog } = props;

  return (
    <>
      <ListStyled>
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={onOpenDialog}>
                <Detail>
                  <ItemName component={"span"} noWrap>
                    Item 1
                  </ItemName>
                  <Quantity>X 1</Quantity>
                </Detail>
                <Price>₱0.02</Price>
              </ListItemButton>
            </ListItem>
          );
        })}
      </ListStyled>

      <List disablePadding>
        <DividerStyled component={"li"} />
        <ListItem>
          <Label>Total</Label>
          <TotalPrice>₱0.02</TotalPrice>
        </ListItem>
      </List>

      <ActionBox>
        <Button
          component={Link}
          to={"ticket"}
          relative={"path"}
          variant="contained"
          color="success"
          size="large"
          disableElevation
          fullWidth
        >
          CHARGE
        </Button>
      </ActionBox>
    </>
  );
};

export default SelectedItemList;
