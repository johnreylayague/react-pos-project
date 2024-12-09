import React from "react";
import {
  AppBar,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  createTheme,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  MenuItem,
  NativeSelect,
  Paper,
  Stack,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { IconButtonBackStyle, RegistrationTitleStyle } from "./RegistrationStyle";
import { useTheme } from "@mui/material/styles";
import { VisibilityOff, Visibility, CheckBox } from "@mui/icons-material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function Registration() {
  const navigate = useNavigate();
  const theme = useTheme();

  const [showPassword, setShowPassword] = React.useState(false);

  const [country, setCountry] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };

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
    <>
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
          <Typography variant="h6" noWrap component="div" sx={RegistrationTitleStyle}>
            Registration
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
                  defaultValue=""
                  aria-describedby="component-error-text"
                  color="success"
                />
                <FormHelperText id="component-error-text" hidden>
                  This field cannot be blank
                </FormHelperText>
              </FormControl>

              <FormControl fullWidth variant="standard">
                <InputLabel htmlFor="standard-adornment-password" color="success">
                  Password
                </InputLabel>
                <Input
                  color="success"
                  id="standard-adornment-password"
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
              </FormControl>

              <FormControl variant="standard">
                <InputLabel htmlFor="component-error" color="success">
                  Business name
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

              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label" color="success">
                  Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  color="success"
                  id="demo-simple-select-standard"
                  value={""}
                  onChange={handleChange}
                  label="Country"
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value={10}>Philippines</MenuItem>
                  <MenuItem value={20}>Peru</MenuItem>
                  <MenuItem value={30}>Poland</MenuItem>
                </Select>
              </FormControl>

              <Button variant="contained" size="large" color="success" disableElevation>
                SIGN UP
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
export default Registration;
