import React from "react";
import TextField from "@mui/material/TextField";

const CipherInputs = ({ char, charIndex, mappings, updateMappings }) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    updateMappings((prevMappings) => ({
      ...prevMappings,
      [char]: value.toUpperCase(),
    }));
  };

  return (
    <TextField
      key={charIndex}
      inputProps={{
        minLength: 1,
        maxLength: 1,
        style: {
          fontSize: 25,
          textAlign: "center",
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
  );
};

export default CipherInputs;
