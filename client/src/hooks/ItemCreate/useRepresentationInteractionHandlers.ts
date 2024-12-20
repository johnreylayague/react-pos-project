import React, { useRef } from "react";
import Webcam from "react-webcam";
import { useDialog } from "../material-ui/useDialog/useDialog";
import { FormValuesItem } from "../../screens/ItemCreate/ItemCreate";
import { UseFormSetValue } from "react-hook-form";
import { useToggle } from "../components/useToggle/useToggle";

export const useRepresentationInteractionHandlers = (
  setValueItem: UseFormSetValue<FormValuesItem>,
  isMobile: boolean
) => {
  const mobileInputRef = useRef<HTMLInputElement | null>(null);
  const webcamRef = useRef<(Webcam & HTMLVideoElement) | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    handleCloseToggle: onStopMediaStream,
    handleOpenToggle: onStartMediaStream,
    isOpenToggle: isMediaStreamActive,
  } = useToggle();

  const {
    isOpenDialog: isDialogWebcamDialog,
    handleCloseDialog: handleCloseDialogWebcam,
    handleOpenDialog: handleOpenDialogWebcam,
  } = useDialog();

  const handleOnChoosePhoto = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleOnTakePhoto = () => {
    if (isMobile && mobileInputRef.current) {
      mobileInputRef.current.click();
    }

    if (!isMobile) {
      handleOpenDialogWebcam();
    }
  };

  const handleOnCapturePhoto = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();

      if (imageSrc) {
        setValueItem("image", imageSrc);
      }

      if (!imageSrc) {
        console.log("imageSrc is null");
      }

      handleCloseDialogWebcam();
    }

    if (!webcamRef.current) {
      console.log("Webcam has not yet been loaded!");
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (!file) {
      console.log("File not found!");
      return;
    }

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;

        if (typeof base64Image === "string") {
          setValueItem("image", base64Image);
        }

        if (typeof base64Image !== "string") {
          console.log("base64Image is not a string!");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOnRemoveImage = () => {
    setValueItem("image", "");
  };

  return {
    isDialogWebcamDialog,
    inputRef,
    webcamRef,
    mobileInputRef,
    handleOnChoosePhoto,
    handleCloseDialogWebcam,
    handleOnTakePhoto,
    handleOnCapturePhoto,
    handleFileChange,
    onStopMediaStream,
    onStartMediaStream,
    handleOnRemoveImage,
    isMediaStreamActive,
  };
};
