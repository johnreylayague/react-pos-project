import React from "react";
import {
  ProfileContainer,
  Role,
  User,
  LockOutlinedIconStyled,
  Location,
  IconButtonStyled,
  ContentContainer,
} from "./HeaderStyles.ts";

type NavigationDrawerHeaderProps = {
  role: string;
  location: string;
  userName: string;
};

const NavigationDrawerHeader: React.FC<NavigationDrawerHeaderProps> = (props) => {
  const { role, location, userName } = props;

  return (
    <ContentContainer>
      <ProfileContainer>
        <Role component="div">{role}</Role>
        <Location component="div">{location}</Location>
        <User component="div">{userName}</User>
      </ProfileContainer>

      <IconButtonStyled>
        <LockOutlinedIconStyled fontSize="large" />
      </IconButtonStyled>
    </ContentContainer>
  );
};

export default NavigationDrawerHeader;
