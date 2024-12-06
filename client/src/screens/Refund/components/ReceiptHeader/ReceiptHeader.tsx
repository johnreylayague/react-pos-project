import { List, styled, Typography, TypographyProps, Theme } from "@mui/material";
import React, { HTMLAttributes } from "react";
import ListItemDetailText from "../ListItemDetailText/ListItemDetailText";

const Title = styled(Typography)<TypographyProps>(({}: { theme: Theme }) => ({}));

const Instruction = styled("span")<HTMLAttributes<HTMLSpanElement>>(({}: { theme: Theme }) => ({
  color: "#9a9a9a",
}));

type ReceiptHeaderProps = {
  title: string;
  instruction: string;
};
const ReceiptHeader: React.FC<ReceiptHeaderProps> = (props) => {
  const { instruction, title } = props;

  return (
    <List disablePadding>
      <ListItemDetailText divider>
        <Title component="div" typography="h6">
          {title}
        </Title>
      </ListItemDetailText>
      <ListItemDetailText insetDivider>
        <Instruction>{instruction}</Instruction>
      </ListItemDetailText>
    </List>
  );
};

export default ReceiptHeader;
