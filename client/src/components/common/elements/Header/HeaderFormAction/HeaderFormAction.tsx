import { Toolbar, IconButton } from "@mui/material";
import React, { ForwardedRef, forwardRef } from "react";
import { Link } from "react-router-dom";
import { AppBarStyled } from "./HeaderFormActionStyles";
import { ArrowBackIconStyled, Title, ButtonBaseStyled } from "./HeaderFormActionStyles";

type HeaderFormActionProps = {
  onSave: () => void;
  onNavigateBack: string;
  title: string;
};

const HeaderFormAction = forwardRef<HTMLButtonElement, HeaderFormActionProps>(
  (props, ref: ForwardedRef<HTMLButtonElement>) => {
    const { onNavigateBack, onSave, title } = props;

    return (
      <>
        <AppBarStyled elevation={0} position="sticky">
          <Toolbar>
            <IconButton component={Link} to={onNavigateBack} relative="path">
              <ArrowBackIconStyled />
            </IconButton>

            <Title component="h6">{title}</Title>

            <ButtonBaseStyled ref={ref} onClick={onSave}>
              SAVE
            </ButtonBaseStyled>
          </Toolbar>
        </AppBarStyled>
      </>
    );
  }
);

// const HeaderFormAction: React.FC<HeaderFormActionProps> = (props) => {
//   const { onNavigateBack, onSave, title } = props;

//   return (
//     <>
//       <AppBarStyled elevation={0} position="sticky">
//         <Toolbar>
//           <IconButton component={Link} to={onNavigateBack} relative="path">
//             <ArrowBackIconStyled />
//           </IconButton>

//           <Title component="h6">{title}</Title>

//           <ButtonBaseStyled onClick={onSave}>SAVE</ButtonBaseStyled>
//         </Toolbar>
//       </AppBarStyled>
//     </>
//   );
// };

export default HeaderFormAction;
