import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import { Alert, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

export default function AutohideSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === "clickaway") {
      console.log(reason);

      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>

      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: "100%" }}>
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    </div>
  );
}
