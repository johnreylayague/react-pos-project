import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Stack,
  FormHelperText,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  const handleBackNavigation = () => {
    navigate("/sign-in");
  };

  return (
    <>
      <AppBar position="static" color="success" sx={{ position: "absolute" }}>
        <Toolbar>
          <IconButton
            onClick={handleBackNavigation}
            edge="start"
            aria-label="back"
            sx={{ mr: 2, color: "#fff" }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Forgot Password?
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Container maxWidth={"xs"}>
          <Paper elevation={3} sx={{ backgroundColor: "#ffffff", p: 3 }} component={"form"}>
            <Stack spacing={3}>
              <Typography variant="body1">
                Enter your email address to receive instructions to reset password.
              </Typography>
              <FormControl variant="standard">
                <InputLabel htmlFor="component-error" color="success">
                  Email
                </InputLabel>
                <Input
                  id="component-error"
                  color="success"
                  defaultValue=""
                  aria-describedby="component-error-text"
                />
                <FormHelperText id="component-error-text" hidden>
                  This field cannot be blank
                </FormHelperText>
              </FormControl>
              <Button variant="contained" size="large" color="success" disableElevation>
                SEND
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
export default ForgotPassword;
