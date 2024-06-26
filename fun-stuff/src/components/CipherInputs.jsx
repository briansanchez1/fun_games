import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

const CipherInputs = ({
  char,
  encryptedChar,
  charIndex,
  mappings,
  updateMappings,
}) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    updateMappings((prevMappings) => ({
      ...prevMappings,
      [char]: value.toUpperCase(),
    }));
  };

  return (
    <Stack>
      <TextField
        key={charIndex}
        inputProps={{
          minLength: 1,
          maxLength: 1,
          style: {
            fontSize: 26,
            textAlign: "center",
            fontWeight: "bold",
            border: "1px solid black",
          },
        }}
        size="small"
        variant="outlined"
        value={mappings[char] || ""}
        onChange={handleInputChange}
        sx={{
          width: "55px",
          margin: "2px",
        }}
      />
      <Typography variant="h4" color="initial" sx={{color: "#797979", fontSize: "20px"}}>
        {encryptedChar[charIndex]}
      </Typography>
    </Stack>
  );
};

export default CipherInputs;
