import React, { useEffect, useState } from "react";
import HeaderFormAction from "../../components/common/elements/Header/HeaderFormAction/HeaderFormAction";
import ContainerWrapper from "./components/ContainerWrapper/ContainerWrapper.tsx";
import Section from "./components/Section/Section.tsx";
import { Collapse, Switch, Typography } from "@mui/material";
import InputField from "./components/InputField/InputField.tsx";
import { useDispatch, useSelector } from "react-redux";
import { Grid2 as Grid, useMediaQuery, useTheme } from "@mui/material";
import ImageUploadActions from "./components/ImageUploadActions/ImageUploadActions.tsx";
import ShapeListItem from "./components/ShapeListItem/ShapeListItem.tsx";
import ColorListItem from "./components/ColorListItem/ColorListItem.tsx";
import RepresentationSelector from "./components/RepresentationSelector/RepresentationSelector.tsx";
import { NumberFormatter } from "./components/NumberFormatter/NumberFormatter.tsx";
import SelectField from "./components/SelectField/SelectField.tsx";
import SoldByOptionSelector from "./components/SoldByOptionSelector/SoldByOptionSelector.tsx";
import DialogCategoryCreate from "./components/DialogCategoryCreate/DialogCategoryCreate.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDialog } from "../../hooks/material-ui/useDialog/useDialog.tsx";
import NumericInputField from "../../components/vendor/react-number-formatter/NumericInputField/NumericInputField.tsx";
import { BoxStyled } from "./ItemCreateStyles.ts";
import { validationCategoryRules, validationItemRules } from "./ItemCreateValidationRules.ts";
import { useActions } from "../../hooks/ItemCreate/useActions.ts";
import assets, {
  colorAndShapeDataProps,
  ColorDataProps,
  ShapeDataProps,
} from "../../assets/assets.ts";

type LocationState = {
  pathname: string;
  search: string;
  hash: string;
  state: null | { from: string };
  key: string;
};

export type FormValuesItem = {
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

export type FormValuesCategory = {
  name: string;
};

type ItemCreateProps = {};

const ItemCreate: React.FC<ItemCreateProps> = (props) => {
  const {} = props;

  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation() as LocationState;
  const isBelowSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [colorAndShapes, _setColorAndShapes] = useState<colorAndShapeDataProps[]>(
    assets.json.colorAndShapes
  );
  const [colorData, _setColorData] = useState<ColorDataProps[]>(assets.json.colorData);
  const [shapeData, _setShapeData] = useState<ShapeDataProps[]>(assets.json.shapeData);

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
    formState: { errors },
  } = useForm<FormValuesItem>({
    defaultValues: {
      name: "",
      price: "0",
      category: "",
      soldby: "each",
      cost: "0",
      sku: "",
      barcode: "",
      trackstock: false,
      representation: "colorAndShape",
      image: "",
      instock: 0,
      colorId: 1,
      shapeId: 1,
    },
  });

  useEffect(() => {
    const color = colorData.find((color) => color.isDefault);
    const shape = shapeData.find((shape) => shape.isDefault);

    if (color?.id) {
      setValueItem("colorId", color.id);
    }

    if (shape?.id) {
      setValueItem("shapeId", shape.id);
    }

    if (!color?.id) {
      console.log("ColorId does not exist !");
    }

    if (!shape?.id) {
      console.log("ShapeId does not exist !");
    }
  }, [colorData, shapeData]);

  useEffect(() => {
    const color = colorData.find((color) => color.id === watchItem("colorId"))?.color;
    const shape = shapeData.find((shape) => shape.id === watchItem("shapeId"))?.shape;
    const removedBorder = shape?.replace("Border", "");
    const Image = colorAndShapes.find(
      (cs) => cs.shape == removedBorder && cs.color == color
    )?.image;

    if (Image) {
      setValueItem("image", Image);
    }

    if (!Image) {
      console.log("Image does not exist !");
    }
  }, [watchItem("shapeId"), watchItem("colorId")]);

  useEffect(() => {
    if (!watchItem("trackstock")) {
      setValueItem("instock", 0);
    }
  }, [watchItem("trackstock")]);

  const { isOpenDialog, handleCloseDialog, handleOpenDialog } = useDialog();

  const {
    handleCategoryChange,
    handleSelectChangeColor,
    handleSelectChangeShape,
    handleOnSubmitCategory,
    handleOnSubmitItem,
  } = useActions(setValueItem, navigate, dispatch, isBelowSmallScreen);

  return (
    <>
      <HeaderFormAction
        onNavigateBack={
          location.state ? location.state.from : isBelowSmallScreen ? "../index" : ".."
        }
        onSave={handleSubmitItem(handleOnSubmitItem)}
        title="Create item"
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
                  helperText={errors.name?.message}
                  isShowHelperText={!!errors.name?.message}
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
                    onChange: (event) => handleCategoryChange(event, field, handleOpenDialog),
                  }}
                  wrapperComponent={<Grid size={12} />}
                />
              )}
            />

            <Controller
              name="soldby"
              control={controlItem}
              rules={validationItemRules.soldby}
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
                  label="Price"
                  inputProps={{
                    ...field,
                    inputComponent: NumberFormatter as any,
                  }}
                  helperText={errors.price?.message}
                  isShowHelperText={!!errors.price?.message}
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
                    inputComponent: NumberFormatter as any,
                  }}
                  helperText={errors.cost?.message}
                  isShowHelperText={!!errors.cost?.message}
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
                  helperText={errors.sku?.message}
                  isShowHelperText={!!errors.sku?.message}
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
                  helperText={errors.barcode?.message}
                  isShowHelperText={!!errors.barcode?.message}
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
                  helperText={errors.instock?.message}
                  isShowHelperText={!!errors.instock?.message}
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
            rules={{}}
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
        onClose={handleCloseDialog}
        isOpen={isOpenDialog}
      />
    </>
  );
};

export default ItemCreate;
