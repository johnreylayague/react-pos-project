import React, { useRef } from "react";
import Webcam from "react-webcam";
import { FormValuesItem } from "../../screens/ItemEdit/ItemEditFormValues";
import { ControllerRenderProps, UseFormSetValue } from "react-hook-form";
import { useToggle } from "../components/useToggle/useToggle";
import { notificationProps } from "../material-ui/useSnackbar/useSnackbar";
import { SelectChangeEvent } from "@mui/material";
import { convertToNumber } from "../../utils/typescriptHelpers";

type useInteractionHandlersProps = (
  setValueItem: UseFormSetValue<FormValuesItem>,
  isMobile: boolean,
  handleOpenSnackbar: ({ message, severity }: notificationProps) => void,
  handleOpenDialogWebcam: () => void,
  handleCloseDialogWebcam: () => void,
  onOpenDialogCreateCategory: () => void
) => {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  webcamRef: React.MutableRefObject<(Webcam & HTMLVideoElement) | null>;
  mobileInputRef: React.MutableRefObject<HTMLInputElement | null>;
  isMediaStreamActive: boolean;
  handleOnChoosePhoto: () => void;
  handleOnTakePhoto: () => void;
  handleOnCapturePhoto: () => void;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnRemoveImage: () => void;
  handleOnUserMediaError: () => void;
  handleSelectChangeColor: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleSelectChangeShape: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleCategoryChange: (
    event: SelectChangeEvent<unknown>,
    field: ControllerRenderProps<FormValuesItem, "categoryId">
  ) => void;
  handleOnStopMediaStream: () => void;
  handleOnStartMediaStream: () => void;
};

export const useInteractionHandlers: useInteractionHandlersProps = (
  setValueItem: UseFormSetValue<FormValuesItem>,
  isMobile: boolean,
  handleOpenSnackbar: ({ message, severity }: notificationProps) => void,
  handleOpenDialogWebcam: () => void,
  handleCloseDialogWebcam: () => void,
  onOpenDialogCreateCategory: () => void
) => {
  const mobileInputRef = useRef<HTMLInputElement | null>(null);
  const webcamRef = useRef<(Webcam & HTMLVideoElement) | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    handleCloseToggle: handleOnStopMediaStream,
    handleOpenToggle: handleOnStartMediaStream,
    isOpenToggle: isMediaStreamActive,
  } = useToggle();

  const handleOnChoosePhoto = () => {
    if (!inputRef.current) {
      handleOpenSnackbar({
        message: "inputRef element is not available. Please ensure it is properly loaded.",
        severity: "error",
      });
      return;
    }

    inputRef.current.click();
  };

  const handleOnTakePhoto = () => {
    if (!mobileInputRef.current) {
      handleOpenSnackbar({
        message: "mobileInputRef element is not available. Please ensure it is properly loaded.",
        severity: "error",
      });
      return;
    }

    if (!isMobile) {
      handleOpenDialogWebcam();
      return;
    }

    mobileInputRef.current.click();
  };

  const handleOnCapturePhoto = () => {
    if (!webcamRef.current) {
      handleOpenSnackbar({
        message: "Webcam element is not available. Please ensure it is properly loaded.",
        severity: "error",
      });
      return;
    }

    const imageSrc = webcamRef.current.getScreenshot();

    if (!imageSrc) {
      handleOpenSnackbar({
        message: "Failed to capture an image. Please ensure the webcam is enabled and try again.",
        severity: "error",
      });
      return;
    }

    setValueItem("image", imageSrc);

    handleCloseDialogWebcam();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (!file) {
      handleOpenSnackbar({
        message: "No file selected. Please choose a file and try again.",
        severity: "error",
      });
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const base64Image = reader.result;

      if (typeof base64Image !== "string") {
        handleOpenSnackbar({
          message: "Invalid image format. Please ensure the image is properly loaded.",
          severity: "error",
        });
        return;
      }

      setValueItem("image", base64Image);
    };

    reader.readAsDataURL(file);
  };

  const handleOnRemoveImage = () => {
    setValueItem("image", "");
  };

  const handleOnUserMediaError = () => {
    handleOpenSnackbar({
      message: "Unable to access the webcam. Please check your device settings and permissions.",
      severity: "error",
    });
  };

  const handleSelectChangeColor = (event: React.MouseEvent<HTMLButtonElement>) => {
    const colorId = event.currentTarget.getAttribute("data-color-id");

    if (!colorId) {
      handleOpenSnackbar({
        message: "'data-color-id' attribute is missing or undefined.",
        severity: "error",
      });
      return;
    }

    const convertColorId = convertToNumber("string", colorId);

    setValueItem("colorId", convertColorId);
  };

  const handleSelectChangeShape = (event: React.MouseEvent<HTMLButtonElement>) => {
    const shapeId = event.currentTarget.getAttribute("data-shape-id");

    if (!shapeId) {
      handleOpenSnackbar({
        message: "'data-shape-id' attribute is missing or undefined.",
        severity: "error",
      });
      return;
    }

    const convertShapeId = convertToNumber("string", shapeId);

    setValueItem("shapeId", convertShapeId);
  };

  const handleCategoryChange = (
    event: SelectChangeEvent<unknown>,
    field: ControllerRenderProps<FormValuesItem, "categoryId">
  ) => {
    if (event.target.value === "addCategory") {
      onOpenDialogCreateCategory();
      return;
    }

    field.onChange(event);
  };

  return {
    inputRef,
    webcamRef,
    mobileInputRef,
    isMediaStreamActive,
    handleOnChoosePhoto,
    handleOnTakePhoto,
    handleOnCapturePhoto,
    handleFileChange,
    handleOnStopMediaStream,
    handleOnStartMediaStream,
    handleOnRemoveImage,
    handleOnUserMediaError,
    handleSelectChangeColor,
    handleSelectChangeShape,
    handleCategoryChange,
  };
};
