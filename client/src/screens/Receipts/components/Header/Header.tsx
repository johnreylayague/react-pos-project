import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowBackIcon, BackButton, RefundButton, TransactionNumber } from "./HeaderStyles";

type HeaderProps = {
  transactionNumber: string;
  backNavigation: string;
  goToRefundNavigation: string;
  refunded: boolean;
};
const Header: React.FC<HeaderProps> = (props) => {
  const { transactionNumber, backNavigation, goToRefundNavigation, refunded } = props;

  return (
    <AppBar elevation={0} position="static" color="success">
      <Toolbar>
        <BackButton component={Link} to={backNavigation} relative="path">
          <ArrowBackIcon />
        </BackButton>

        <TransactionNumber component="h6" typography="h6">
          {transactionNumber}
        </TransactionNumber>

        {!refunded && (
          <RefundButton to={goToRefundNavigation} component={Link}>
            REFUND
          </RefundButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
