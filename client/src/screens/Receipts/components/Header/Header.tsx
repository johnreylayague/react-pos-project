import { ArrowBack } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  ButtonBase,
  styled,
  Theme,
  IconProps,
  IconButtonProps,
  ButtonBaseProps,
  TypographyProps,
} from "@mui/material";
import React from "react";
import { Link, LinkProps } from "react-router-dom";

const BackButton = styled(IconButton)<IconButtonProps & LinkProps>(
  ({ theme }: { theme: Theme }) => ({
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    marginRight: theme.spacing(2),
    marginLeft: `-${theme.spacing(1)}`,
  })
);

const ArrowBackIcon = styled(ArrowBack)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

const TransactionNumber = styled(Typography)<TypographyProps>(({}: { theme: Theme }) => ({
  flexGrow: 1,
}));

const RefundButton = styled(ButtonBase)<ButtonBaseProps & LinkProps>(
  ({ theme }: { theme: Theme }) => ({
    ...theme.typography.body1,
    minHeight: "inherit",
    padding: theme.spacing(2),
  })
);

type HeaderProps = {
  transactionNumber: string;
  backNavigation: string;
};
const Header: React.FC<HeaderProps> = (props) => {
  const { transactionNumber, backNavigation } = props;

  return (
    <AppBar elevation={0} position="static" color="success">
      <Toolbar>
        <BackButton component={Link} to={backNavigation} relative="path">
          <ArrowBackIcon />
        </BackButton>

        <TransactionNumber component="h6" typography="h6">
          {transactionNumber}
        </TransactionNumber>

        <RefundButton component={Link} to="/receipt/1/refund">
          REFUND
        </RefundButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
