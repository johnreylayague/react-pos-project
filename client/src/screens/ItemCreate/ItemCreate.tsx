import React, { useEffect, useState } from "react";
import HeaderFormAction from "../../components/common/elements/Header/HeaderFormAction/HeaderFormAction";
import ContainerWrapper from "./components/ContainerWrapper/ContainerWrapper.tsx";
import Section from "./components/Section/Section.tsx";
import { CircularProgress, Collapse, IconButton, Switch, Toolbar, Typography } from "@mui/material";
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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDialog } from "../../hooks/material-ui/useDialog/useDialog.tsx";
import NumericInputField from "../../components/vendor/react-number-formatter/NumericInputField/NumericInputField.tsx";
import {
  BoxStyled,
  ActionStack,
  AvatarStyled,
  CameraAltIcon,
  ChoosePhotoButton,
  ChoosePhotoFolderIcon,
  CloseButton,
  CloseIcon,
  DialogActionsStyled,
  ImageContainer,
  ImageIcon,
  ImageWrapper,
  ProgressContainer,
  RemoveImageButton,
  RightAlignedContainer,
  TakePhotoButton,
  TakePhotoCameraAltIcon,
  WebcamDialog,
} from "./ItemCreateStyles.ts";
import { validationCategoryRules, validationItemRules } from "./ItemCreateValidationRules.ts";
import { useActions } from "../../hooks/ItemCreate/useActions.ts";
import assets, { ColorDataProps, ShapeDataProps } from "../../assets/assets.ts";
import { useRepresentationInteractionHandlers } from "../../hooks/ItemCreate/useRepresentationInteractionHandlers.ts";
import { isMobile } from "react-device-detect";
import Webcam from "react-webcam";
import { useInteractionHandlers } from "../../hooks/ItemCreate/useInteractionHandlers.ts";

type LocationState = {
  pathname: string;
  search: string;
  hash: string;
  state: null | { from: string };
  key: string;
};

export type FormValuesItem = {
  name: string;
  categoryId: string | number;
  soldby: string;
  price: string;
  cost: string;
  sku: string;
  barcode: string;
  trackstock: boolean;
  representation: "colorAndShape" | "image";
  image: string;
  colorAndShapeImage: string;
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
  const [colorData, _setColorData] = useState<ColorDataProps[]>(assets.json.colorData);
  const [shapeData, _setShapeData] = useState<ShapeDataProps[]>(assets.json.shapeData);

  const {
    handleSubmit: handleSubmitCategory,
    reset: resetCategory,
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
      categoryId: "",
      soldby: "each",
      cost: "0",
      sku: "",
      barcode: "",
      trackstock: false,
      representation: "colorAndShape",
      colorAndShapeImage: "",
      image: "",
      instock: 0,
      colorId: 1,
      shapeId: 1,
    },
  });

  const { isOpenDialog, handleCloseDialog, handleOpenDialog } = useDialog();

  const { handleCategoryChange, handleSelectChangeColor, handleSelectChangeShape } =
    useInteractionHandlers(setValueItem, watchItem, handleOpenDialog);

  const {
    handleCloseDialogWebcam,
    handleFileChange,
    handleOnCapturePhoto,
    handleOnChoosePhoto,
    handleOnRemoveImage,
    handleOnTakePhoto,
    inputRef,
    isDialogWebcamDialog,
    isMediaStreamActive,
    mobileInputRef,
    onStartMediaStream,
    onStopMediaStream,
    webcamRef,
  } = useRepresentationInteractionHandlers(setValueItem, isMobile);

  const { handleOnSubmitCategory, handleOnSubmitItem } = useActions(
    setValueItem,
    navigate,
    dispatch,
    isBelowSmallScreen,
    handleCloseDialog,
    resetCategory
  );

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
              name="categoryId"
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
            <ImageContainer direction={"row"} spacing={2}>
              {!watchItem("image") && (
                <AvatarStyled variant="square">
                  <ImageIcon />
                </AvatarStyled>
              )}

              {watchItem("image") && (
                <ImageWrapper>
                  <RemoveImageButton size="small" onClick={handleOnRemoveImage}>
                    <CloseIcon />
                  </RemoveImageButton>

                  <AvatarStyled
                    src={watchItem("image")}
                    variant="square"
                    slotProps={{ img: { draggable: false } }}
                  />
                </ImageWrapper>
              )}

              <ActionStack spacing={2}>
                <ChoosePhotoButton onClick={handleOnChoosePhoto} variant="text" size="medium">
                  <ChoosePhotoFolderIcon />
                  CHOOSE PHOTO
                </ChoosePhotoButton>

                <TakePhotoButton onClick={handleOnTakePhoto} variant="text" size="medium">
                  <TakePhotoCameraAltIcon />
                  TAKE PHOTO
                </TakePhotoButton>
              </ActionStack>
            </ImageContainer>

            <input
              type="file"
              ref={inputRef}
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />

            <input
              type="file"
              ref={mobileInputRef}
              accept="image/*"
              capture="environment"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
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

      <WebcamDialog
        open={isDialogWebcamDialog}
        fullWidth
        maxWidth="sm"
        onTransitionEnter={() => {
          onStopMediaStream();
        }}
        onTransitionExited={() => {
          onStopMediaStream();
        }}
      >
        <Toolbar>
          <RightAlignedContainer>
            <CloseButton onClick={handleCloseDialogWebcam}>
              <CloseIcon />
            </CloseButton>
          </RightAlignedContainer>
        </Toolbar>

        {!isMediaStreamActive && (
          <ProgressContainer>
            <CircularProgress />
          </ProgressContainer>
        )}

        <Webcam
          audio={false}
          ref={webcamRef}
          onUserMedia={onStartMediaStream}
          screenshotFormat="image/png"
          videoConstraints={{}}
          style={{
            ...(!isMediaStreamActive ? { backgroundColor: "#000" } : {}),
          }}
        />

        <DialogActionsStyled>
          <IconButton onClick={handleOnCapturePhoto} disabled={!isMediaStreamActive} size="large">
            <CameraAltIcon />
          </IconButton>
        </DialogActionsStyled>
      </WebcamDialog>
    </>
  );
};

export default ItemCreate;
