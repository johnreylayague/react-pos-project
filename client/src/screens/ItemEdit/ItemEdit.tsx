import React, { useEffect } from "react";
import HeaderFormAction from "../../components/common/elements/Header/HeaderFormAction/HeaderFormAction";
import ContainerWrapper from "./components/ContainerWrapper/ContainerWrapper.tsx";
import Section from "./components/Section/Section.tsx";
import {
  Alert,
  CircularProgress,
  Collapse,
  IconButton,
  Snackbar,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import InputField from "./components/InputField/InputField.tsx";
import { Grid2 as Grid, useMediaQuery, useTheme } from "@mui/material";
import ShapeListItem from "./components/ShapeListItem/ShapeListItem.tsx";
import ColorListItem from "./components/ColorListItem/ColorListItem.tsx";
import RepresentationSelector from "./components/RepresentationSelector/RepresentationSelector.tsx";
import PesosInputField from "../../components/vendor/react-number-formatter/PesosInputField/PesosInputField.tsx";
import SelectField from "./components/SelectField/SelectField.tsx";
import SoldByOptionSelector from "./components/SoldByOptionSelector/SoldByOptionSelector.tsx";
import DialogCategoryCreate from "./components/DialogCategoryCreate/DialogCategoryCreate.tsx";
import ConfirmationDialog from "../../components/common/elements/Dialog/ConfirmationDialog/ConfirmationDialog.tsx";
import {
  ActionStack,
  AvatarStyled,
  BoxStyled,
  CameraAltIcon,
  ChoosePhotoButton,
  ChoosePhotoFolderIcon,
  CloseButton,
  CloseIcon,
  DeleteActionButton,
  DeleteIconStyled,
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
} from "./ItemEditStyles.ts";
import assets from "../../assets/assets.ts";
import { Controller, useForm } from "react-hook-form";
import NumericInputField from "../../components/vendor/react-number-formatter/NumericInputField/NumericInputField.tsx";
import { useActions } from "../../hooks/ItemEdit/useActions.ts";
import { validationItemRules, validationCategoryRules } from "./ItemEditValidationRules.ts";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { storeProps } from "../../store/index.ts";
import Webcam from "react-webcam";
import { isMobile } from "react-device-detect";
import { useInteractionHandlers } from "../../hooks/ItemEdit/useInteractionHandlers.ts";
import { useDialog } from "../../hooks/material-ui/useDialog/useDialog.tsx";
import { useSnackbar } from "../../hooks/material-ui/useSnackbar/useSnackbar.ts";
import {
  itemEdit,
  FormValuesItem,
  FormValuesCategory,
  categoryCreate,
} from "./ItemEditFormValues.ts";
import { convertToNumber } from "../../utils/typescriptHelpers.ts";

const colorData = assets.json.colorData;
const shapeData = assets.json.shapeData;

type ItemCreateProps = {};
const ItemCreate: React.FC<ItemCreateProps> = (props) => {
  const {} = props;

  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isBelowSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const itemList = useSelector((state: storeProps) => state.item.itemList);
  const params = useParams<{ itemId: string }>();

  const {
    handleSubmit: handleSubmitCategory,
    control: controlCategory,
    reset: resetCategory,
    formState: { errors: errorsCategory },
  } = useForm<FormValuesCategory>({
    defaultValues: categoryCreate,
  });

  const {
    handleSubmit: handleSubmitItem,
    control: controlItem,
    setValue: setValueItem,
    watch: watchItem,
    reset: resetItem,
    setError: setErrorItem,
    formState: { errors: errorsItem },
  } = useForm<FormValuesItem>({
    defaultValues: itemEdit,
  });

  useEffect(() => {
    const itemId = convertToNumber("string", params.itemId);
    const findItemById = itemList.find((item) => item.id === itemId);

    if (!findItemById) {
      handleOpenSnackbar({
        message: "Invalid Item ID provided",
        severity: "error",
      });
      return;
    }

    resetItem(findItemById);
  }, [resetItem, navigate]);

  useEffect(() => {
    if (!watchItem("trackstock")) {
      setValueItem("instock", 0);
    }
  }, [watchItem("trackstock")]);

  const { snackbar, handleCloseSnackbar, handleOpenSnackbar } = useSnackbar();

  const {
    isOpenDialog: isDialogWebcamDialog,
    handleCloseDialog: handleCloseDialogWebcam,
    handleOpenDialog: handleOpenDialogWebcam,
  } = useDialog();

  const {
    isOpenDialog: isDialogCreateCategory,
    handleOpenDialog: onOpenDialogCreateCategory,
    handleCloseDialog: onCloseDialogCreateCategory,
  } = useDialog();

  const {
    isOpenDialog: isDialogDelete,
    handleOpenDialog: onOpenDialogDelete,
    handleCloseDialog: onCloseDialogDelete,
  } = useDialog();

  const {
    inputRef,
    isMediaStreamActive,
    mobileInputRef,
    webcamRef,
    handleCategoryChange,
    handleFileChange,
    handleOnCapturePhoto,
    handleOnChoosePhoto,
    handleOnRemoveImage,
    handleOnTakePhoto,
    handleOnUserMediaError,
    handleSelectChangeColor,
    handleSelectChangeShape,
    handleOnStartMediaStream,
    handleOnStopMediaStream,
  } = useInteractionHandlers(
    setValueItem,
    isMobile,
    handleOpenSnackbar,
    handleOpenDialogWebcam,
    handleCloseDialogWebcam,
    onOpenDialogCreateCategory
  );

  const { handleOnSubmitCategory, handleOnSubmitItem, handleOnDeleteItem } = useActions(
    watchItem,
    setValueItem,
    navigate,
    dispatch,
    isBelowSmallScreen,
    onCloseDialogCreateCategory,
    resetCategory,
    handleOpenSnackbar,
    setErrorItem
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

      <WebcamDialog
        open={isDialogWebcamDialog}
        fullWidth
        maxWidth="sm"
        onTransitionEnter={() => {
          handleOnStopMediaStream();
        }}
        onTransitionExited={() => {
          handleOnStopMediaStream();
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
          onUserMedia={handleOnStartMediaStream}
          onUserMediaError={handleOnUserMediaError}
          screenshotFormat="image/png"
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

      <ConfirmationDialog
        title="Delete category"
        description="Are you sure you want to delete the category?"
        open={isDialogDelete}
        onClose={onCloseDialogDelete}
        onDelete={handleOnDeleteItem}
      />

      <Snackbar
        open={snackbar.isOpenSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.alert.severity} variant="filled">
          {snackbar.alert.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ItemCreate;
