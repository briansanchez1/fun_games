import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const CipherGame = () => {
  const [quote, setQuote] = useState("hello chatgpt, I am a user.");
  const [filledIndexes, setFilledIndexes] = useState([]);

  const isAlphabetCharacter = (char) => /[a-zA-Z]/.test(char);

  const handleChange = (index, value) => {
    if (isAlphabetCharacter(value) || value === "") {
      setQuote((prevQuote) => {
        const newQuote =
          prevQuote.slice(0, index) + value + prevQuote.slice(index + 1);
        return newQuote;
      });
      if (!filledIndexes.includes(index)) {
        setFilledIndexes((prevIndexes) => [...prevIndexes, index]);
      }
    }
  };

  return (
    <Container maxWidth="xs">
      <h1>Cipher Text Game</h1>
      <p>{quote}</p>
      <Grid container spacing={2}>
        {quote.split("").map((char, index) => (
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <TextField
              key={index}
              value={filledIndexes.includes(index) ? char : ""}
              onChange={(e) =>
                handleChange(index, e.target.value.trim().charAt(0))
              }
              inputProps={{ minLength: 1, maxLength: 1 }}
              disabled={!isAlphabetCharacter(char)} // Disable non-alphabet characters in the original quote
            />
          </Grid>
        ))}
      </Grid>

      <a href="/">Dashboard</a>
    </Container>
  );
};

export default CipherGame;
