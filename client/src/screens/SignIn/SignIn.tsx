import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Box,
  Button,
  Paper,
  Stack,
  Link,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { IconButtonBackStyle, SignInTitleStyle } from "./SignInStyle";
import { useTheme } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleBackNavigation = () => {
    navigate("..");
  };
  return (
    <div>
      <AppBar position="static" color="success" sx={{ position: "absolute" }}>
        <Toolbar>
          <IconButton
            onClick={handleBackNavigation}
            edge="start"
            aria-label="back"
            sx={IconButtonBackStyle(theme)}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={SignInTitleStyle}>
            Sign In
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

              <FormControl variant="standard">
                <InputLabel htmlFor="standard-adornment-password" color="success">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  color="success"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText id="component-error-text" hidden>
                  This field cannot be blank
                </FormHelperText>
              </FormControl>

              <Button
                component={RouterLink}
                to="/sale"
                relative="path"
                variant="contained"
                color="success"
                size="large"
                disableElevation
              >
                SIGN IN
              </Button>

              <Link to="/forgot-password" component={RouterLink} align="center" underline="none">
                Forgot Password?
              </Link>
            </Stack>
          </Paper>
        </Container>
      </Box>
    </div>
  );
};

export default SignIn;
