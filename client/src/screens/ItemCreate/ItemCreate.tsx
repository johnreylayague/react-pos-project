import React from "react";
import HeaderFormAction from "../../components/common/elements/Header/HeaderFormAction/HeaderFormAction";
import ContainerWrapper from "./components/ContainerWrapper/ContainerWrapper.tsx";
import Section from "./components/Section/Section.tsx";
import { Collapse, SelectChangeEvent, Switch, Typography } from "@mui/material";
import InputField from "./components/InputField/InputField.tsx";
import { useSelector } from "react-redux";
import { storeProps } from "../../store/index.ts";
import { Grid2 as Grid, useMediaQuery, useTheme } from "@mui/material";
import ImageUploadActions from "./components/ImageUploadActions/ImageUploadActions.tsx";
import ShapeListItem from "./components/ShapeListItem/ShapeListItem.tsx";
import ColorListItem from "./components/ColorListItem/ColorListItem.tsx";
import RepresentationSelector from "./components/RepresentationSelector/RepresentationSelector.tsx";
import { NumberFormatter } from "./components/NumberFormatter/NumberFormatter.tsx";
import SelectField from "./components/SelectField/SelectField.tsx";
import SoldByOptionSelector from "./components/SoldByOptionSelector/SoldByOptionSelector.tsx";
import DialogCategoryCreate from "./components/DialogCategoryCreate/DialogCategoryCreate.tsx";
import { useLocation } from "react-router-dom";
import { useForm, Controller, ControllerRenderProps } from "react-hook-form";
import { useDialog } from "../../hooks/material-ui/useDialog/useDialog.tsx";
import NumericInputField from "../../components/vendor/react-number-formatter/NumericInputField/NumericInputField.tsx";
import { BoxStyled } from "./ItemCreateStyles.ts";

type LocationState = {
  pathname: string;
  search: string;
  hash: string;
  state: null | { from: string };
  key: string;
};

type ItemCreateProps = {};

const ItemCreate: React.FC<ItemCreateProps> = (props) => {
  const {} = props;

  const theme = useTheme();
  const location = useLocation() as LocationState;
  const isBelowSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const colorData = useSelector((state: storeProps) => state.item.colorData);
  const shapeData = useSelector((state: storeProps) => state.item.shapeData);

  const { isOpenDialog, handleCloseDialog, handleOpenDialog } = useDialog();

  type FormValues = {
    name: string;
    category: string | "addCategory";
    soldby: string;
    price: string;
    cost: string;
    sku: string;
    barcode: string;
    trackstock: boolean;
    representation: string;
    colorId: number;
    shapeId: number;
    instock: number;
  };

  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      price: "12.00",
      category: "",
      soldby: "each",
      cost: "15.00",
      sku: "",
      barcode: "",
      trackstock: false,
      representation: "colorAndShape",
      instock: 0,
      colorId: 1,
      shapeId: 3,
    },
  });

  const handleSelectChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const colorId = event.currentTarget.getAttribute("data-color-id");

    if (colorId) {
      const convertColorId = Number.parseInt(colorId);
      setValue("colorId", convertColorId);
    }

    if (!colorId) {
      console.log("colorId does not exist");
    }
  };

  const handleSelectChangeShape = (event: React.MouseEvent<HTMLButtonElement>) => {
    const shapeId = event.currentTarget.getAttribute("data-shape-id");

    if (shapeId) {
      const convertShapeId = Number.parseInt(shapeId);
      setValue("shapeId", convertShapeId);
    }

    if (!shapeId) {
      console.log("shapeId does not exist");
    }
  };

  const handleCategoryChange = (
    event: SelectChangeEvent<unknown>,
    field: ControllerRenderProps<FormValues, "category">
  ) => {
    if (event.target.value === "addCategory") {
      handleOpenDialog();
      return;
    }

    field.onChange(event);
  };

  const handleOnSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <>
      <HeaderFormAction
        onNavigateBack={location.state ? location.state.from : ".."}
        onSave={handleSubmit(handleOnSubmit)}
        title="Create item"
      />

      <ContainerWrapper>
        <Section>
          <Grid container rowSpacing={3} columnSpacing={6}>
            <Controller
              name="name"
              control={control}
              rules={{
                required: "Name is required.",
                minLength: { value: 5, message: "SKU must be at least 5 characters long." },
                maxLength: { value: 50, message: "SKU cannot exceed 50 characters." },
              }}
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
              control={control}
              rules={{}}
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
              control={control}
              rules={{
                required: "Soldby is required.",
              }}
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
              control={control}
              rules={{
                required: "Price is required.",
              }}
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
              control={control}
              rules={{
                required: "Cost is required.",
              }}
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
              control={control}
              rules={{
                required: "SKU is required.",
                maxLength: { value: 50, message: "SKU cannot exceed 50 characters." },
              }}
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
              control={control}
              rules={{
                required: "Barcode is required.",
                maxLength: { value: 50, message: "Barcode cannot exceed 50 characters." },
              }}
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
              control={control}
              rules={{}}
              render={({ field }) => (
                <Switch
                  checked={field.value}
                  onChange={(event) => field.onChange(event)}
                  color="success"
                />
              )}
            />
          </BoxStyled>

          <Collapse in={watch("trackstock")} timeout="auto" unmountOnExit>
            <Controller
              name="instock"
              control={control}
              rules={{ required: "In stock is required." }}
              render={({ field }) => (
                <InputField
                  inputProps={{ ...field, inputComponent: NumericInputField as any }}
                  label="In stock"
                  inputLabelProps={{ shrink: true }}
                  helperText={errors.instock?.message}
                  isShowHelperText={!!errors.instock?.message}
                  formControlProps={{
                    sx: (theme) => ({ mb: theme.spacing(2), mt: theme.spacing(3) }),
                  }}
                />
              )}
            />
          </Collapse>
        </Section>

        <Section title="Representation on POS">
          <Controller
            name="representation"
            control={control}
            rules={{}}
            render={({ field }) => (
              <RepresentationSelector
                radioGroupProps={{ ...field }}
                isBelowSmallScreen={isBelowSmallScreen}
              />
            )}
          />

          <div hidden={watch("representation") !== "colorAndShape"}>
            <Grid container spacing={3} sx={() => ({ mt: 2 })}>
              {colorData.map((color) => {
                return (
                  <ColorListItem
                    key={color.id}
                    colorData={color}
                    selected={watch("colorId") === color.id}
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
                    selected={watch("shapeId") === shape.id}
                    onChangeShape={handleSelectChangeShape}
                  />
                );
              })}
            </Grid>
          </div>

          <div hidden={watch("representation") !== "image"}>
            <ImageUploadActions />
          </div>
        </Section>
      </ContainerWrapper>

      <DialogCategoryCreate
        title="Create category"
        content={<InputField label="Name" />}
        onClose={handleCloseDialog}
        isOpen={isOpenDialog}
      />
    </>
  );
};

export default ItemCreate;
