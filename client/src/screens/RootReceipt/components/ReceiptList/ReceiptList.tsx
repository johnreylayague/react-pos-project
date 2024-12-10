import { ListSubheader, ListSubheaderProps, styled, Theme } from "@mui/material";
import React, { HTMLAttributes } from "react";

const UlStyled = styled("ul")<HTMLAttributes<HTMLUListElement>>(({}: { theme: Theme }) => ({
  paddingLeft: 0,
  listStyleType: "none",
}));

const DateHeader = styled(ListSubheader)<ListSubheaderProps>(({ theme }: { theme: Theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  color: theme.palette.success.main,
}));

type ReceiptListProps = {
  dateHeader: string;
  children: React.ReactNode;
};
const ReceiptList: React.FC<ReceiptListProps> = (props) => {
  const { children, dateHeader } = props;

  return (
    <li>
      <UlStyled>
        <DateHeader>{dateHeader}</DateHeader>
        {children}
      </UlStyled>
    </li>
  );
};

export default ReceiptList;
