import {
  Box,
  Container,
  Divider,
  List,
  ListSubheader,
  Paper,
  Stack,
  CSSObject,
  styled,
  PaperProps,
  Theme,
  ListSubheaderProps,
  DividerProps,
  BoxProps,
  ContainerProps,
} from "@mui/material";
import React, { HTMLAttributes } from "react";
import Header from "./components/Header/Header";
import InputField from "../../components/common/elements/Input/InputField/InputField";
import { NumberFormatter } from "./components/NumberFormatter/NumberFormatter";
import OutlinedButton from "../../components/common/elements/Button/OutlinedButton/OutlinedButton";
import ListItemDetail from "./components/ListItemDetail/ListItemDetail";

const ListSubheaderStyled = styled(ListSubheader)<ListSubheaderProps>(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.success.main,
  })
);

const DividerStyled = styled(Divider)<DividerProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginLeft: `-${theme.spacing(2)}`,
    marginRight: `-${theme.spacing(2)}`,
  } as CSSObject,
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(0.5),
  marginLeft: `-${theme.spacing(3)}`,
  marginRight: `-${theme.spacing(3)}`,
}));

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
  },
  marginTop: theme.spacing(3),
}));

const BoxStyled = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  display: "flex",
  gap: theme.spacing(3),
}));

const Description = styled("span")<HTMLAttributes<HTMLSpanElement>>(({}: { theme: Theme }) => ({
  color: "#767676",
}));

const Timestamp = styled("span")<HTMLAttributes<HTMLSpanElement>>(
  ({ theme }: { theme: Theme }) => ({
    paddingRight: theme.spacing(2),
  })
);

const Role = styled("span")<HTMLAttributes<HTMLSpanElement>>(({ theme }: { theme: Theme }) => ({
  paddingRight: theme.spacing(0.8),
}));

type CashManagementPorps = {};
const CashManagement: React.FC<CashManagementPorps> = (props) => {
  const {} = props;

  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<number>(0);

  return (
    <>
      <Header title="Cash Management" backTo=".." />

      <ContainerStyled maxWidth="md">
        <PaperStyled>
          <Stack spacing={3}>
            <InputField
              label="Amount"
              inputProps={{
                inputComponent: NumberFormatter as any,
                value: value,
              }}
            />
            <InputField label="Comment" />

            <BoxStyled>
              <OutlinedButton disabled={isDisabled}>PAY IN</OutlinedButton>
              <OutlinedButton disabled={isDisabled} color="error">
                PAY OUT
              </OutlinedButton>
            </BoxStyled>
          </Stack>

          <DividerStyled />

          <List
            subheader={<ListSubheaderStyled disableGutters>Pay in/Pay out</ListSubheaderStyled>}
          >
            {Array.from({ length: 2 }).map((_, index) => (
              <ListItemDetail secondary="₱0.00" key={index}>
                <Timestamp>6:41 AM</Timestamp>
                <Role>Owner</Role>
                <Description>- 123</Description>
              </ListItemDetail>
            ))}
          </List>
        </PaperStyled>
      </ContainerStyled>
    </>
  );
};

export default CashManagement;
