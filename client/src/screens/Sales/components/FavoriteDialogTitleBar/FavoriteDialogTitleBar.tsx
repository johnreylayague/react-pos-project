import {
  BoxHeaderStyled,
  IconButtonStyled,
  TypographyHeaderStyled,
} from "./FavoriteDialogTitleBarStyles";
import { Close as CloseIcon } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { favoriteDialogActions } from "../../../../store/favoriteDialog-slice";

type FavoriteDialogTitleBar = {
  title: string;
};

const FavoriteDialogTitleBar: React.FC<FavoriteDialogTitleBar> = (props) => {
  const { title } = props;
  const dispatch = useDispatch();

  const closeDialog = () => {
    dispatch(favoriteDialogActions.closeDialog());
  };

  return (
    <BoxHeaderStyled>
      <IconButtonStyled onClick={closeDialog}>
        <CloseIcon fontSize="medium" />
      </IconButtonStyled>
      <TypographyHeaderStyled component="h5">{title}</TypographyHeaderStyled>
    </BoxHeaderStyled>
  );
};

export default FavoriteDialogTitleBar;
