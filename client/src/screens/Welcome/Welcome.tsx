import { Button, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
import {
  WelcomeLayout,
  HeaderSection,
  HeaderContainer,
  ActionContainer,
  iconStyle,
  headerTitle,
  buttonStyle,
  subTitle,
  StackList,
} from "./WelcomeStyles.ts";
import { useTheme } from "@mui/material/styles";

function Welcome() {
  const theme = useTheme();

  return (
    <>
      <WelcomeLayout>
        <HeaderSection>
          <HeaderContainer>
            <StorefrontIcon sx={iconStyle} />
            <Typography variant="h3" sx={headerTitle(theme)}>
              NP
            </Typography>
            <Typography variant="h5" sx={subTitle(theme)}>
              POINT OF SALE
            </Typography>
          </HeaderContainer>
        </HeaderSection>

        <ActionContainer>
          <Stack spacing={3} sx={StackList}>
            <Button
              disableElevation
              component={RouterLink}
              to={"registration"}
              variant={"contained"}
              color={"success"}
              size={"large"}
              sx={buttonStyle}
            >
              Registration
            </Button>
            <Button
              component={RouterLink}
              to={"sign-in"}
              variant={"outlined"}
              color={"success"}
              size={"large"}
              sx={buttonStyle}
            >
              Sign In
            </Button>
          </Stack>
        </ActionContainer>
      </WelcomeLayout>
    </>
  );
}

export default Welcome;
