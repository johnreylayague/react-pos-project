import React from "react";
import {
  BoxStyled,
  StackStyled,
  AccessTimeIcon,
  BoxTextStyled,
  Subtitle,
  Title,
} from "./OpenShiftRequestStyles";
import ContainedButton from "../../../../components/common/elements/Button/ContainedButton/ContainedButton";

type OpenShiftRequestProps = {
  onOpen: () => void;
};
const OpenShiftRequest: React.FC<OpenShiftRequestProps> = (props) => {
  const { onOpen } = props;

  const handleOnOpenShift = () => {
    onOpen();
  };

  return (
    <BoxStyled>
      <StackStyled spacing={2}>
        <AccessTimeIcon />

        <BoxTextStyled>
          <Title component={"div"} variant="h6">
            Shift is closed
          </Title>
          <Subtitle component={"div"} variant="body1">
            Open a shift to perform sales
          </Subtitle>
        </BoxTextStyled>

        <ContainedButton onClick={handleOnOpenShift} fullWidth={false} disableElevation>
          OPEN SHIFT
        </ContainedButton>
      </StackStyled>
    </BoxStyled>
  );
};

export default OpenShiftRequest;
