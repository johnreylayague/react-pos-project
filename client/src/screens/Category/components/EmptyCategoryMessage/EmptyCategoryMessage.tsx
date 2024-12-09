import React from "react";
import { Box, Typography } from "@mui/material";
import { ContentCopy as ContentCopyIcon } from "@mui/icons-material";

const EmptyCategoryMessage = () => {
  return (
    <Box
      sx={(_theme) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      })}
    >
      <Box
        sx={(_theme) => ({
          backgroundColor: "#f5f5f5",
          height: 170,
          width: 170,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        <ContentCopyIcon sx={{ fontSize: 100, color: "#9e9e9e" }} />
      </Box>

      <Typography
        sx={(theme) => ({
          ...theme.typography.h5,
          marginTop: 4,
          color: "#898989",
        })}
      >
        You have no categories yet
      </Typography>

      <Typography
        sx={(theme) => ({
          ...theme.typography.h6,
          color: "#b5b5b5",
          marginTop: 2,
        })}
      >
        Categories help you organize items.
      </Typography>
    </Box>
  );
};

export default EmptyCategoryMessage;
