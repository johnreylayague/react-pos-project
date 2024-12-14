import React, { useEffect, useState } from "react";
import HeaderFormAction from "../../components/common/elements/Header/HeaderFormAction/HeaderFormAction";
import ContainerWrapper from "./components/ContainerWrapper/ContainerWrapper.tsx";
import Section from "./components/Section/Section.tsx";
import { Collapse, Switch, Typography } from "@mui/material";
import InputField from "./components/InputField/InputField.tsx";
import { Grid2 as Grid, useMediaQuery, useTheme } from "@mui/material";
import ImageUploadActions from "./components/ImageUploadActions/ImageUploadActions.tsx";
import ShapeListItem from "./components/ShapeListItem/ShapeListItem.tsx";
import ColorListItem from "./components/ColorListItem/ColorListItem.tsx";
import RepresentationSelector from "./components/RepresentationSelector/RepresentationSelector.tsx";
import PesosInputField from "../../components/vendor/react-number-formatter/PesosInputField/PesosInputField.tsx";
import SelectField from "./components/SelectField/SelectField.tsx";
import SoldByOptionSelector from "./components/SoldByOptionSelector/SoldByOptionSelector.tsx";
import DialogCategoryCreate from "./components/DialogCategoryCreate/DialogCategoryCreate.tsx";
import ConfirmationDialog from "../../components/common/elements/Dialog/ConfirmationDialog/ConfirmationDialog.tsx";
import { useDialog } from "../../hooks/material-ui/useDialog/useDialog.tsx";
import { BoxStyled, DeleteActionButton, DeleteIconStyled } from "./ItemEditStyles.ts";
import assets, { ColorDataProps, ShapeDataProps } from "../../assets/assets.ts";
import { Controller, useForm } from "react-hook-form";
import { useInteractionHandlers } from "../../hooks/ItemEdit/useInteractionHandlers.ts";
import NumericInputField from "../../components/vendor/react-number-formatter/NumericInputField/NumericInputField.tsx";
import { useActions } from "../../hooks/ItemEdit/useActions.ts";
import { validationItemRules, validationCategoryRules } from "./ItemEditValidationRules.ts.ts";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { storeProps } from "../../store/index.ts";

export type FormValuesCategory = {
  name: string;
};

export type FormValuesItem = {
  id: number | string;
  name: string;
  category: string;
  soldby: string;
  price: string;
  cost: string;
  sku: string;
  barcode: string;
  trackstock: boolean;
  representation: string;
  image: string;
  colorId: number;
  shapeId: number;
  instock: number;
};

type ItemCreateProps = {};
const ItemCreate: React.FC<ItemCreateProps> = (props) => {
  const {} = props;

  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isBelowSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const itemList = useSelector((state: storeProps) => state.item.itemList);
  const [colorData, _setColorData] = useState<ColorDataProps[] | []>(assets.json.colorData);
  const [shapeData, _setShapeData] = useState<ShapeDataProps[] | []>(assets.json.shapeData);
  const params = useParams<{ itemId: string }>();

  const {
    handleSubmit: handleSubmitCategory,
    control: controlCategory,
    formState: { errors: errorsCategory },
  } = useForm<FormValuesCategory>({
    defaultValues: {
      name: "",
    },
  });

  const {
    handleSubmit: handleSubmitItem,
    control: controlItem,
    setValue: setValueItem,
    watch: watchItem,
    reset: resetItem,
    formState: { errors: errorsItem },
  } = useForm<FormValuesItem>({
    defaultValues: {
      id: "",
      name: "",
      category: "",
      soldby: "each",
      price: "0",
      cost: "0",
      sku: "",
      barcode: "",
      trackstock: false,
      instock: 0,
      representation: "colorAndShape",
      colorId: 1,
      shapeId: 1,
      image: "",
    },
  });

  useEffect(() => {
    const itemId = params.itemId ? Number.parseInt(params.itemId) : params.itemId;
    const findItemById = itemList.find((item) => item.id === itemId);

    if (findItemById) {
      resetItem(findItemById);
    }

    if (!findItemById) {
      const itemRedirectPath = isBelowSmallScreen ? "/item/index" : "/item";
      navigate(itemRedirectPath);
    }
  }, [resetItem, navigate]);

  useEffect(() => {
    if (!watchItem("trackstock")) {
      setValueItem("instock", 0);
    }
  }, [watchItem("trackstock")]);

  const {
    isOpenDialog: isDialogDelete,
    handleOpenDialog: onOpenDialogDelete,
    handleCloseDialog: onCloseDialogDelete,
  } = useDialog();

  const {
    isOpenDialog: isDialogCreateCategory,
    handleOpenDialog: onOpenDialogCreateCategory,
    handleCloseDialog: onCloseDialogCreateCategory,
  } = useDialog();

  const { handleCategoryChange, handleSelectChangeColor, handleSelectChangeShape } =
    useInteractionHandlers(setValueItem, onOpenDialogCreateCategory);

  const { handleOnSubmitCategory, handleOnSubmitItem, handleOnDeleteItem } = useActions(
    navigate,
    dispatch,
    isBelowSmallScreen,
    params
  );

  return (
    <>
      <HeaderFormAction
        onNavigateBack="/item"
        onSave={handleSubmitItem(handleOnSubmitItem)}
        title="Edit item"
      />

      <ContainerWrapper>
        <Section>
          <Grid container rowSpacing={3} columnSpacing={6}>
            <Controller
              name="name"
              control={controlItem}
              rules={validationItemRules.name}
              render={({ field }) => (
                <InputField
                  inputProps={{
                    ...field,
                  }}
                  helperText={errorsItem.name?.message}
                  isShowHelperText={!!errorsItem.name?.message}
                  label="Name"
                  wrapperComponent={<Grid size={12} />}
                />
              )}
            />

            <Controller
              name="category"
              control={controlItem}
              rules={validationItemRules.category}
              render={({ field }) => (
                <SelectField
                  selectProps={{
                    ...field,
                    onChange: (event) => handleCategoryChange(event, field),
                  }}
                  wrapperComponent={<Grid size={12} />}
                />
              )}
            />

            <Controller
              name="soldby"
              control={controlItem}
              rules={{}}
              render={({ field }) => (
                <SoldByOptionSelector
                  radioGroupProps={{ ...field }}
                  label="Sold by"
                  wrapperComponent={<Grid size={12} />}
                />
              )}
            />

            <Controller
              name="price"
              control={controlItem}
              rules={validationItemRules.price}
              render={({ field }) => (
                <InputField
                  inputProps={{
                    ...field,
                    inputComponent: PesosInputField as any,
                  }}
                  label="Price"
                  helperText={errorsItem.price?.message}
                  isShowHelperText={!!errorsItem.price?.message}
                  wrapperComponent={<Grid size={{ xs: 12, sm: 6 }} />}
                />
              )}
            />

            <Controller
              name="cost"
              control={controlItem}
              rules={validationItemRules.cost}
              render={({ field }) => (
                <InputField
                  label="Cost"
                  inputProps={{
                    ...field,
                    inputComponent: PesosInputField as any,
                  }}
                  helperText={errorsItem.cost?.message}
                  isShowHelperText={!!errorsItem.cost?.message}
                  wrapperComponent={<Grid size={{ xs: 12, sm: 6 }} />}
                />
              )}
            />

            <Controller
              name="sku"
              control={controlItem}
              rules={validationItemRules.sku}
              render={({ field }) => (
                <InputField
                  label="SKU"
                  inputProps={{
                    ...field,
                  }}
                  helperText={errorsItem.sku?.message}
                  isShowHelperText={!!errorsItem.sku?.message}
                  wrapperComponent={<Grid size={{ xs: 12, sm: 6 }} />}
                />
              )}
            />

            <Controller
              name="barcode"
              control={controlItem}
              rules={validationItemRules.barcode}
              render={({ field }) => (
                <InputField
                  label="Barcode"
                  inputProps={{
                    ...field,
                  }}
                  helperText={errorsItem.barcode?.message}
                  isShowHelperText={!!errorsItem.barcode?.message}
                  wrapperComponent={<Grid size={{ xs: 12, sm: 6 }} />}
                />
              )}
            />
          </Grid>
        </Section>

        <Section title="Inventory">
          <BoxStyled>
            <Typography>Track stock</Typography>

            <Controller
              name="trackstock"
              control={controlItem}
              render={({ field }) => (
                <Switch
                  checked={field.value}
                  onChange={(event) => field.onChange(event)}
                  color="success"
                />
              )}
            />
          </BoxStyled>

          <Collapse in={watchItem("trackstock")} timeout="auto">
            <Controller
              name="instock"
              control={controlItem}
              rules={validationItemRules.instock}
              render={({ field }) => (
                <InputField
                  inputProps={{
                    ...field,
                    inputComponent: NumericInputField as any,
                    slotProps: { input: { maxLength: 3 } },
                  }}
                  label="In stock"
                  inputLabelProps={{ shrink: true }}
                  helperText={errorsItem.instock?.message}
                  isShowHelperText={!!errorsItem.instock?.message}
                  formControlProps={{
                    sx: (theme) => ({
                      marginBottom: theme.spacing(2),
                      marginTop: theme.spacing(3),
                    }),
                  }}
                />
              )}
            />
          </Collapse>
        </Section>

        <Section title="Representation on POS">
          <Controller
            name="representation"
            control={controlItem}
            render={({ field }) => (
              <RepresentationSelector
                radioGroupProps={{ ...field }}
                isBelowSmallScreen={isBelowSmallScreen}
              />
            )}
          />

          <div hidden={watchItem("representation") !== "colorAndShape"}>
            <Grid container spacing={3} sx={() => ({ mt: 2 })}>
              {colorData.map((color) => {
                return (
                  <ColorListItem
                    key={color.id}
                    colorData={color}
                    selected={watchItem("colorId") === color.id}
                    onChangeColor={handleSelectChangeColor}
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
                    selected={watchItem("shapeId") === shape.id}
                    onChangeShape={handleSelectChangeShape}
                  />
                );
              })}
            </Grid>
          </div>

          <div hidden={watchItem("representation") !== "image"}>
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
        onSave={handleSubmitCategory(handleOnSubmitCategory)}
        content={
          <>
            <Controller
              name="name"
              control={controlCategory}
              rules={validationCategoryRules.name}
              render={({ field }) => (
                <InputField
                  label="Name"
                  inputProps={{ ...field }}
                  helperText={errorsCategory.name?.message}
                  isShowHelperText={!!errorsCategory.name?.message}
                />
              )}
            />
          </>
        }
        onClose={onCloseDialogCreateCategory}
        isOpen={isDialogCreateCategory}
      />

      <ConfirmationDialog
        title="Delete category"
        description="Are you sure you want to delete the category?"
        open={isDialogDelete}
        onClose={onCloseDialogDelete}
        onDelete={handleOnDeleteItem}
      />
    </>
  );
};

export default ItemCreate;
