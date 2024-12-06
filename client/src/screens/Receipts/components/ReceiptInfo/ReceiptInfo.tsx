import { Divider, DividerProps, ListItem, ListItemText, styled, Theme } from "@mui/material";
import React from "react";

const DividerStyled = styled(Divider)<DividerProps>(({ theme }: { theme: Theme }) => ({
  margin: `${theme.spacing(1)} 0`,
}));

type ReceiptInfoProps = { employeeName: string; posId: string };

const ReceiptInfo: React.FC<ReceiptInfoProps> = (props) => {
  const { employeeName, posId } = props;

  return (
    <>
      <DividerStyled component={"li"} />
      <ListItem disablePadding>
        <ListItemText>Employee: {employeeName} </ListItemText>
      </ListItem>
      <ListItem disablePadding>
        <ListItemText>POS: POS {posId}</ListItemText>
      </ListItem>
      <DividerStyled component={"li"} />
    </>
  );
};

export default ReceiptInfo;
