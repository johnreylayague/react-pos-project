import { InputStyled, TypographyStyled } from "./CommentInputSectionStyled";
import { Box, FormControl, FormHelperText } from "@mui/material";

function CommentInputSection() {
  return (
    <Box>
      <TypographyStyled component="label">Comment</TypographyStyled>
      <FormControl fullWidth>
        <InputStyled
          id="comment-input"
          aria-describedby="comment-input"
          placeholder="Enter Comment"
          color="success"
          multiline
        />
        <FormHelperText id="comment-input" hidden></FormHelperText>
      </FormControl>
    </Box>
  );
}

export default CommentInputSection;
