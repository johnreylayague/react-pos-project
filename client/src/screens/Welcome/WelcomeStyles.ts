import { Box, Container } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { css } from "@emotion/react";

// styled
export const WelcomeLayout = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  min-height: 550px;
  width: 100%;
`;

export const HeaderSection = styled(Box)<{ theme?: Theme }>(
  ({ theme }) => `
  display: flex;
  flex: 2;
  width: 100%;
  background-color: ${theme.palette.success.main}; 
`
);

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ActionContainer = styled(Container)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

// css

export const headerTitle = (theme: Theme) => css`
  margin-top: 20px;
  color: ${theme.palette.common.white};
  font-weight: bold;
  text-align: center;
`;

export const subTitle = (theme: Theme) => css`
  color: ${theme.palette.common.white};
  margin-top: -10px;
  letter-spacing: 3px;
  text-align: center;
`;

export const iconStyle = (theme: Theme) => css`
  color: ${theme.palette.common.white};
  font-size: 100px;
`;

export const StackList = css`
  width: 350px;
  max-width: 100%;
`;

export const buttonStyle = css`
  font-weight: bold;
`;
