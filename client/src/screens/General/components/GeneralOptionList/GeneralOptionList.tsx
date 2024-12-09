import React from "react";
import { IconButton, List, ListItemText, Switch } from "@mui/material";
import { ListItemStyled } from "./GeneralOptionListStyles";
import { useDispatch, useSelector } from "react-redux";
import { settingActions } from "../../../../store/setting-slice";
import { storeProps } from "../../../../store";

type GeneralOptionListProps = {};

const GeneralOptionList: React.FC<GeneralOptionListProps> = (props) => {
  const {} = props;

  const setting = useSelector((state: storeProps) => state.setting);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, generalId: number) => {
    dispatch(settingActions.updateGeneral({ id: generalId, checked: event.target.checked }));
  };

  return (
    <List>
      {setting.generalData.map((general) => {
        return (
          <ListItemStyled
            key={general.id}
            secondaryAction={
              <IconButton edge="end">
                <Switch
                  checked={general.checked}
                  onChange={(event) => handleChange(event, general.id)}
                  color="success"
                />
              </IconButton>
            }
          >
            <ListItemText>{general.title}</ListItemText>
          </ListItemStyled>
        );
      })}
    </List>
  );
};

export default GeneralOptionList;
