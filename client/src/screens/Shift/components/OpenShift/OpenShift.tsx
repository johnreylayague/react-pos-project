import React from "react";
import {
  Container,
  ContainerProps,
  CSSObject,
  Paper,
  PaperProps,
  Stack,
  styled,
  Theme,
  Typography,
} from "@mui/material";
import OutlinedButton from "../../../../components/common/elements/Button/OutlinedButton/OutlinedButton";
import InputField from "../../../ItemCreate/components/InputField/InputField";
import { NumberFormatter } from "../NumberFormatter/NumberFormatter";

const PaperStyled = styled(Paper)<PaperProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    boxShadow: "none",
    paddingLeft: 0,
    paddingRight: 0,
  } as CSSObject,
  padding: theme.spacing(3),
  boxShadow: theme.shadows[3],
}));

const ContainerStyled = styled(Container)<ContainerProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: 0,
    marginBottom: 0,
  } as CSSObject,
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

type OpenShiftProps = {
  inputProps: {
    value: number;
    onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
  title: string;
  onOpenShift: () => void;
};
const OpenShift: React.FC<OpenShiftProps> = (props) => {
  const {
    inputProps: { value, onChangeInput },
    title,
    onOpenShift,
  } = props;

  return (
    <ContainerStyled maxWidth="sm">
      <PaperStyled>
        <Stack spacing={3}>
          <Typography>{title}</Typography>
          <InputField
            label="Amount"
            inputLabelProps={{ shrink: true }}
            inputProps={{
              value: value,
              inputComponent: NumberFormatter as any,
              onChange: onChangeInput,
            }}
          />
          <OutlinedButton onClick={onOpenShift}>OPEN SHIFT</OutlinedButton>{" "}
        </Stack>
      </PaperStyled>
    </ContainerStyled>
  );
};

export default OpenShift;
