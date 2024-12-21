import { SnackbarCloseReason } from "@mui/material";
import React from "react";

type alertSeverityProps = "error" | "info" | "success" | "warning";

type initialStateProps = {
  isOpenSnackbar: boolean;
  alert: { severity: alertSeverityProps; message: string };
};

export type notificationProps = {
  message: string;
  severity: alertSeverityProps;
};

type useSnackbarProps = () => {
  snackbar: initialStateProps;
  handleOpenSnackbar: ({ message, severity }: notificationProps) => void;
  handleCloseSnackbar: (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => void;
};

export const useSnackbar: useSnackbarProps = () => {
  const [snackbar, setSnackbar] = React.useState<initialStateProps>({
    isOpenSnackbar: false,
    alert: { message: "", severity: "info" },
  });

  const handleOpenSnackbar = ({
    message = "",
    severity = "info",
  }: {
    message: string;
    severity: alertSeverityProps;
  }) => {
    setSnackbar({ isOpenSnackbar: true, alert: { message, severity } });
  };

  const handleCloseSnackbar = (
    _event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar((prevState) => ({ isOpenSnackbar: false, alert: prevState.alert }));
  };

  return {
    snackbar,
    handleOpenSnackbar,
    handleCloseSnackbar,
  };
};

{
  /*
  
  <Snackbar
open={snackbar.isOpenSnackbar}
anchorOrigin={{ vertical: "top", horizontal: "right" }}
autoHideDuration={2000}
onClose={handleCloseSnackbar}
>
<Alert
  onClose={handleCloseSnackbar}
  severity={snackbar.alert.severity}
  variant="filled"
>
  {snackbar.alert.message}
</Alert>
</Snackbar>

  */
}
