import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  ButtonBase,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Checkbox,
  Dialog,
} from "@mui/material";
import { Close as CloseIcon, Search as SearchIcon } from "@mui/icons-material";

const listCategory = [
  { id: 1, title: "Item 1", subTitle: "Candy", checked: false },
  { id: 2, title: "Item 2", subTitle: "", checked: false },
  { id: 3, title: "Item 3", subTitle: "", checked: false },
  // { id: 4, title: "Item 3", subTitle: "", checked: false },
  // { id: 5, title: "Item 3", subTitle: "", checked: false },
  // { id: 6, title: "Item 3", subTitle: "", checked: false },
  // { id: 7, title: "Item 3", subTitle: "", checked: false },
  // { id: 8, title: "Item 3", subTitle: "", checked: false },
  // { id: 9, title: "Item 3", subTitle: "", checked: false },
  // { id: 10, title: "Item 3", subTitle: "", checked: false },
  // { id: 11, title: "Item 3", subTitle: "", checked: false },
  // { id: 12, title: "Item 3", subTitle: "", checked: false },
  // { id: 13, title: "Item 3", subTitle: "", checked: false },
  // { id: 14, title: "Item 3", subTitle: "", checked: false },
  // { id: 15, title: "Item 3", subTitle: "", checked: false },
  // { id: 16, title: "Item 3", subTitle: "", checked: false },
  // { id: 17, title: "Item 3", subTitle: "", checked: false },
  // { id: 18, title: "Item 3", subTitle: "", checked: false },
  // { id: 19, title: "Item 3", subTitle: "", checked: false },
  // { id: 20, title: "Item 3", subTitle: "", checked: false },
  // { id: 21, title: "Item 3", subTitle: "", checked: false },
];

type CategoryDialogProps = {
  open: boolean;
  handleSetOpen: (value: boolean) => void;
};

const CategoryDialog: React.FC<CategoryDialogProps> = (props) => {
  const { open, handleSetOpen } = props;

  const [listCategoryData, setListCategoryData] = useState(listCategory);
  const inputSearchRef = useRef<HTMLInputElement | null>(null);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");

  // useEffect(() => {
  //   if (inputValue) {
  //     setIsFocus(true);
  //   }
  //   // if (!inputValue) {
  //   //   setIsFocus(true);
  //   // }
  //   return () => {};
  // }, [inputValue]);

  const handleClose = (_event: React.MouseEvent<HTMLButtonElement>) => {
    handleSetOpen(false);
  };

  const handleInputOnFocusSearch = () => {
    setIsFocus(true);
  };

  const handleInputCloseSearch = () => {
    setInputValue("");
    setIsFocus(false);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const isChecked = event.target.checked;

    setListCategoryData((prevListCategoryData) => {
      const updatedCategory = prevListCategoryData.map((category) => {
        if (category.id === id) {
          return { ...category, checked: isChecked };
        }
        return { ...category };
      });
      return updatedCategory;
    });
  };

  const handleOnClick = (id: number) => {
    setListCategoryData((prevListCategoryData) => {
      const updatedCategory = prevListCategoryData.map((category) => {
        if (category.id === id) {
          return { ...category, checked: !category.checked };
        }
        return { ...category };
      });
      return updatedCategory;
    });
  };

  const handleInputOnBlur = () => {
    if (!inputValue) {
      setIsFocus(false);
    }
  };

  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setInputValue(value);
  };

  const handleOnTransitionEnter = () => {
    inputSearchRef.current?.focus();
  };

  const handleOnTransitionExited = () => {
    inputSearchRef.current?.onblur;
  };

  return (
    <Dialog
      fullWidth
      onClose={handleClose}
      maxWidth="sm"
      open={open}
      onTransitionEnter={handleOnTransitionEnter}
      onTransitionExited={handleOnTransitionExited}
      sx={(_theme) => ({
        "& .MuiPaper-root": {
          borderRadius: 0,
          my: 0,
          height: "100%",
          minHeight: "100%",
        },
      })}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton onClick={handleClose} sx={{ ml: 2 }}>
          <CloseIcon sx={(_theme) => ({ color: "#858585" })} />
        </IconButton>
        <Typography sx={(theme) => ({ ...theme.typography.h5, flexGrow: 1, px: 3 })}>
          Assign items to category
        </Typography>
        <ButtonBase
          sx={(theme) => ({
            ...theme.typography.body1,
            fontWeight: "bold",
            color: theme.palette.success.main,
            px: 3,
            py: 2.4,
          })}
        >
          SAVE
        </ButtonBase>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", alignItems: "center", px: 2, py: 1, gap: 3 }}>
        <IconButton onClick={() => {}}>
          <SearchIcon sx={(_theme) => ({ color: "#858585" })} />
        </IconButton>
        <InputBase
          inputRef={inputSearchRef}
          value={inputValue}
          onChange={handleInputOnChange}
          onFocus={handleInputOnFocusSearch}
          onBlur={handleInputOnBlur}
          placeholder="Search Item"
          sx={(theme) => ({ ...theme.typography.body1, width: "100%" })}
        />
        {isFocus && (
          <IconButton onClick={handleInputCloseSearch}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>
      <Divider />
      <List sx={{ overflowY: "auto" }}>
        {listCategoryData.map((category) => {
          return (
            <React.Fragment key={category.id}>
              <ListItem
                // sx={{ overflowY: "auto" }}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={(event) => handleOnChange(event, category.id)}
                    checked={category.checked}
                    sx={(theme) => ({
                      right: theme.spacing(1),
                      "&.Mui-checked": {
                        color: theme.palette.success.main,
                      },
                    })}
                  />
                }
                sx={{ p: 0 }}
              >
                <ListItemButton
                  onClick={() => handleOnClick(category.id)}
                  sx={(_theme) => ({
                    alignItems: "center",
                    pl: 3,
                    pt: 2,
                    pb: 2,
                  })}
                >
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText
                    secondary={category.subTitle}
                    sx={(_theme) => ({
                      my: 0,
                    })}
                  >
                    {category.title}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          );
        })}
      </List>
    </Dialog>
  );
};

export default CategoryDialog;
