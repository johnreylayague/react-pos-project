import React from "react";
import { ListItemButton, ListItemAvatar, ListItemText, Divider } from "@mui/material";
import { shiftActions, shiftProps } from "../../../../store/shift-slice";
import { formatStartTime, formatShiftDateRange } from "../../../../utils/format";
import { AccessTimeIcon, AvatarStyled, ListItemStyled } from "./ListItemShiftHistoryStyles";
import { convertToType } from "../../../../utils/typescriptHelpers";
import { useDispatch } from "react-redux";

type ListItemShiftHistoryProps = { onShowShiftReport: () => void; shiftData: shiftProps };

const ListItemShiftHistory: React.FC<ListItemShiftHistoryProps> = (props) => {
  const { onShowShiftReport, shiftData } = props;

  const dispatch = useDispatch();

  const convertedShiftStartDate = convertToType(
    "string",
    shiftData.shiftStartDate,
    new Date(shiftData.shiftStartDate)
  );

  const convertedShiftEndDate = convertToType(
    "string",
    shiftData.shiftEndDate,
    new Date(shiftData.shiftEndDate)
  );

  const shiftStartTime = formatStartTime(convertedShiftStartDate);
  const shiftEndTime = formatStartTime(convertedShiftEndDate);
  const shiftDateRange = formatShiftDateRange(convertedShiftStartDate, convertedShiftEndDate);

  const handleOnShowReport = () => {
    dispatch(shiftActions.selected(shiftData));
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
