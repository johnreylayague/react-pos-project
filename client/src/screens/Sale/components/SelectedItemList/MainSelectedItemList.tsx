import { List, ListItem } from "@mui/material";
import React from "react";
import { DividerStyled, Label, ListStyled, TotalPrice } from "./MainSelectedItemListStyles";
import DetailListItem from "./DetailListItem";

type MainSelectedItemListProps = {
  onOpenDialog: () => void;
};

const MainSelectedItemList: React.FC<MainSelectedItemListProps> = (props) => {
  const { onOpenDialog } = props;

  return (
    <>
      <ListStyled>
        {Array.from({ length: 4 }).map((_, index) => {
          return <DetailListItem key={index} onOpenDialog={onOpenDialog} />;
        })}
      </ListStyled>

      <List disablePadding>
        <DividerStyled component={"li"} />
        <ListItem>
          <Label>Total</Label>
          <TotalPrice>₱0.02</TotalPrice>
        </ListItem>
      </List>

      {/* <ActionBox>
        <Button
          component={Link}
          to={"/ticket/charge"}
          relative={"path"}
          variant="contained"
          color="success"
          size="large"
          disableElevation
          fullWidth
        >
          CHARGE
        </Button>
      </ActionBox> */}
    </>
  );
};

export default MainSelectedItemList;
