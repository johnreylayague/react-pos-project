import React from "react";
import HeaderFormAction from "../../components/common/elements/Header/HeaderFormAction/HeaderFormAction";
import ContainerWrapper from "./components/ContainerWrapper/ContainerWrapper.tsx";
import Section from "./components/Section/Section.tsx";
import {
  Collapse,
  SelectChangeEvent,
  Switch,
  Typography,
  styled,
  Box,
  BoxProps,
  Theme,
  ButtonBase,
  ButtonBaseProps,
  IconProps,
} from "@mui/material";
import InputField from "./components/InputField/InputField.tsx";
import { useSelector, useDispatch } from "react-redux";
import { storeProps } from "../../store/index.ts";
import { Grid2 as Grid, useMediaQuery, useTheme } from "@mui/material";
import ImageUploadActions from "./components/ImageUploadActions/ImageUploadActions.tsx";
import ShapeListItem from "./components/ShapeListItem/ShapeListItem.tsx";
import ColorListItem from "./components/ColorListItem/ColorListItem.tsx";
import RepresentationSelector from "./components/RepresentationSelector/RepresentationSelector.tsx";
import { itemActions } from "../../store/item-slice";
import { NumberFormatter } from "./components/NumberFormatter/NumberFormatter.tsx";
import SelectField from "./components/SelectField/SelectField.tsx";
import SoldByOptionSelector from "./components/SoldByOptionSelector/SoldByOptionSelector.tsx";
import DialogCategoryCreate from "./components/DialogCategoryCreate/DialogCategoryCreate.tsx";
import { Delete } from "@mui/icons-material";
import ConfirmationDialog from "../../components/common/elements/Dialog/ConfirmationDialog/ConfirmationDialog.tsx";
import { useDialog } from "../../hooks/material-ui/useDialog/useDialog.tsx";

const BoxStyled = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: theme.spacing(3),
}));

const DeleteIconStyled = styled(Delete)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: "#757575",
  marginRight: theme.spacing(1),
}));

const DeleteActionButton = styled(ButtonBase)<ButtonBaseProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    borderRadius: 0,
  },
  width: "100%",
  padding: `${theme.spacing(1.142)} ${theme.spacing(3)}`,
  boxShadow: theme.shadows[3],
  backgroundColor: theme.palette.background.paper,
}));

type ItemCreateProps = {};
const ItemCreate: React.FC<ItemCreateProps> = (props) => {
  const {} = props;

  const dispatch = useDispatch();
  const theme = useTheme();
  const isBelowSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    isOpenDialog: isDialogDelete,
    handleOpenDialog: onOpenDialogDelete,
    handleCloseDialog: onCloseDialogDelete,
  } = useDialog();

  const colorData = useSelector((state: storeProps) => state.item.colorData);
  const shapeData = useSelector((state: storeProps) => state.item.shapeData);

  const [stateSwitch, setStateSwitch] = React.useState(false);
  const [valuePOS, setValuePOS] = React.useState("colorAndShape");

  const [openDialog, setOpenDialog] = React.useState(false);
  const [category, setCategory] = React.useState<string>("");
  const [valueRadio, setValueRadio] = React.useState("weight");

  const handleChangePOS = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValuePOS((event.target as HTMLInputElement).value);
  };

  const handleSelectChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const colorId = event.currentTarget.getAttribute("data-color-id");

    if (colorId) {
      const convertColorId = Number.parseInt(colorId);

      dispatch(
        itemActions.selectColorPicker({
          colorId: convertColorId,
        })
      );
    }
  };

  const handleSelectChangeShape = (event: React.MouseEvent<HTMLButtonElement>) => {
    const shapeId = event.currentTarget.getAttribute("data-shape-id");

    if (shapeId) {
      const convertShapeId = Number.parseInt(shapeId);

      dispatch(
        itemActions.selectShapePicker({
          shapeId: convertShapeId,
        })
      );
    }
  };

  const handleChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateSwitch(event.target.checked);
  };

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueRadio((event.target as HTMLInputElement).value);
  };

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;

    setCategory(value === "30" ? "" : value);

    if (value === "30") {
      setOpenDialog(true);
    }
  };

  const [valuesInput, setValuesInput] = React.useState({
    numberformat: "1320",
  });

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValuesInput({
      ...valuesInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOnDeleteItem = () => {
    setOpenDialog(true);
  };

  return (
    <>
      <HeaderFormAction onNavigateBack="/item" onSave={() => {}} title="Edit item" />

      <ContainerWrapper>
        <Section>
          <Grid container rowSpacing={3} columnSpacing={6}>
            <InputField label="Name" wrapperComponent={<Grid size={12} />} />

            <SelectField
              value={category}
              onChange={handleChange}
              wrapperComponent={<Grid size={12} />}
            />

            <SoldByOptionSelector
              label="Sold by"
              onChange={handleChangeRadio}
              value={valueRadio}
              wrapperComponent={<Grid size={12} />}
            />

            <InputField
              label="Price"
              helperText="Leave the field blank to indicate the price upon sale"
              isShowHelperText={true}
              inputProps={{
                inputComponent: NumberFormatter as any,
                value: valuesInput.numberformat,
                onChange: handleChangeInput,
              }}
              wrapperComponent={<Grid size={{ xs: 12, sm: 6 }} />}
            />

            <InputField
              label="Cost"
              inputProps={{ inputComponent: NumberFormatter as any, value: 0 }}
              wrapperComponent={<Grid size={{ xs: 12, sm: 6 }} />}
            />

            <InputField label="SKU" wrapperComponent={<Grid size={{ xs: 12, sm: 6 }} />} />

            <InputField label="Barcode" wrapperComponent={<Grid size={{ xs: 12, sm: 6 }} />} />
          </Grid>
        </Section>

        <Section title="Inventory">
          <BoxStyled>
            <Typography>Track stock</Typography>
            <Switch color="success" checked={stateSwitch} onChange={handleChangeSwitch} />
          </BoxStyled>

          <Collapse in={stateSwitch} timeout="auto" unmountOnExit>
            <InputField
              label="In stock"
              inputLabelProps={{ shrink: true }}
              inputProps={{ value: 0 }}
              formControlProps={{
                sx: (theme) => ({ mb: theme.spacing(2), mt: theme.spacing(3) }),
              }}
            />
          </Collapse>
        </Section>

        <Section title="Representation on POS">
          <RepresentationSelector
            defaultValue={"colorAndShape"}
            isBelowSmallScreen={isBelowSmallScreen}
            onChange={handleChangePOS}
          />

          <div hidden={valuePOS !== "colorAndShape"}>
            <Grid container spacing={3} sx={() => ({ mt: 2 })}>
              {colorData.map((color) => {
                return (
                  <ColorListItem
                    key={color.id}
                    colorData={color}
                    onChangeColor={handleSelectChange}
                  />
                );
              })}
            </Grid>

            <Grid container spacing={3} sx={() => ({ mt: 3 })}>
              {shapeData.map((shape) => {
                return (
                  <ShapeListItem
                    key={shape.id}
                    shapeData={shape}
                    onChangeShape={handleSelectChangeShape}
                  />
                );
              })}
            </Grid>
          </div>

          <div hidden={valuePOS !== "image"}>
            <ImageUploadActions />
          </div>
        </Section>

        <DeleteActionButton onClick={onOpenDialogDelete}>
          <DeleteIconStyled />
          DELETE ITEM
        </DeleteActionButton>
      </ContainerWrapper>

      <DialogCategoryCreate
        title="Create category"
        content={<InputField label="Name" />}
        onClose={handleCloseDialog}
        isOpen={openDialog}
      />

      <ConfirmationDialog
        title="Delete category"
        description="Are you sure you want to delete the category?"
        open={isDialogDelete}
        onClose={onCloseDialogDelete}
        onDelete={onCloseDialogDelete}
      />
    </>
  );
};

export default ItemCreate;
