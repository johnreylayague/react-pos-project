import React from "react";
import { ListItemButton, ListItemAvatar, ListItemText, Divider } from "@mui/material";
import { shiftActions } from "../../../../store/shift-slice";
import { formatStartTime, formatShiftDateRange } from "../../../../utils/format";
import { AccessTimeIcon, AvatarStyled, ListItemStyled } from "./ListItemShiftHistoryStyles";
import { useDispatch } from "react-redux";

type ListItemShiftHistoryProps = {
  onShowShiftReport: () => void;
  shiftId: number;
  shiftOpenedAt: string;
  shiftClosedAt: string;
};

const ListItemShiftHistory: React.FC<ListItemShiftHistoryProps> = (props) => {
  const { onShowShiftReport, shiftOpenedAt, shiftClosedAt, shiftId } = props;

  const dispatch = useDispatch();

  const shiftStartTime = formatStartTime(shiftOpenedAt);
  const shiftEndTime = formatStartTime(shiftClosedAt);
  const shiftDateRange = formatShiftDateRange(shiftOpenedAt, shiftClosedAt);

  const handleOnShowReport = () => {
    dispatch(shiftActions.setSelectedShiftId(shiftId));
    onShowShiftReport();
  };

  return (
    <React.Fragment>
      <ListItemStyled disablePadding>
        <ListItemButton onClick={handleOnShowReport}>
          <ListItemAvatar>
            <AvatarStyled>
              <AccessTimeIcon />
            </AvatarStyled>
          </ListItemAvatar>
          <ListItemText
            secondary={
              <>
                {shiftStartTime} - {shiftEndTime}
              </>
            }
          >
            {shiftDateRange}
          </ListItemText>
        </ListItemButton>
      </ListItemStyled>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};

export default ListItemShiftHistory;
