import React from "react";
import {
  AvatarStyled,
  EmptyItemNotification,
  ListIcon,
  MainMessage,
  SubMessage,
  BoxStyled,
} from "./EmptyItemMessageStyles";

type ItemsProps = {
  mainMessage: string;
  subMessage: string;
};

const EmptyItemMessage: React.FC<ItemsProps> = (props) => {
  const { mainMessage, subMessage } = props;

  return (
    <BoxStyled>
      <EmptyItemNotification spacing={1}>
        <AvatarStyled>
          <ListIcon />
        </AvatarStyled>

        <MainMessage component={"div"} variant="h6">
          {mainMessage}
        </MainMessage>
        <SubMessage component={"div"} variant="body1">
          {subMessage}
        </SubMessage>
      </EmptyItemNotification>
    </BoxStyled>
  );
};

export default EmptyItemMessage;
