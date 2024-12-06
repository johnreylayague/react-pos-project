import "./App.css";
import { CssBaseline, GlobalStyles } from "@mui/material";
import Routes from "./Routes.tsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { THEME_ID } from "./utils/constant.ts";
import { rootStyles, getThemeConfiguration } from "./utils/createTheme.ts";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "./store/index.ts";
import { useEffect } from "react";
import { settingActions } from "./store/setting-slice.ts";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  const setting = useSelector((state: storeProps) => state.setting);
  const dispatch = useDispatch();

  useEffect(() => {
    const isThemeSelected = setting.generalData.find((general) => general.id === THEME_ID)?.checked;
    const currentTheme = isThemeSelected ? "dark" : "light";

    if (isThemeSelected) {
      dispatch(settingActions.toggleThemeMode(currentTheme));
      return;
    }
    dispatch(settingActions.toggleThemeMode(currentTheme));
    return () => {};
  }, [setting]);

  const theme = createTheme(getThemeConfiguration({ isThemeMode: setting.isThemeMode }));

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={rootStyles} />
        <Routes />
      </ThemeProvider>
    </>
  );
};

export default App;
