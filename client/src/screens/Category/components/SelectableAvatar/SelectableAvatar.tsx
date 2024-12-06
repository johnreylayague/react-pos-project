import { Check as CheckIcon } from "@mui/icons-material";
import { Fade, Avatar } from "@mui/material";
import React from "react";
import { AvatarStyled } from "./SelectableAvatarStyles";

type SelectableAvatarProps = {
  selected: boolean;
  itemName: string;
  imageSrc: string;
  timeout: number;
  variant: "circular" | "rounded" | "square";
};

const SelectableAvatar: React.FC<SelectableAvatarProps> = (props) => {
  const { selected, imageSrc, itemName, timeout, variant } = props;

  return (
    <>
      <Fade in={selected} timeout={timeout}>
        <AvatarStyled variant={variant}>
          <CheckIcon />
        </AvatarStyled>
      </Fade>

      <Fade in={!selected} timeout={timeout}>
        <Avatar
          variant={variant}
          alt={itemName}
          src={imageSrc}
          imgProps={{
            draggable: false,
          }}
        />
      </Fade>
    </>
  );
};

export default SelectableAvatar;
