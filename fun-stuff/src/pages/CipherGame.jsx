import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { fetchQuote } from "../helper/axios_helper";
import { generateKey, encrypt } from "../helper/substitutionCipher";
import CipherInputs from "../components/CipherInputs";
import { Link } from "@mui/material";

const CipherGame = () => {
  const [quote, setQuote] = useState("");
  const [mappings, setMappings] = useState({});
  const [key, setKey] = useState(generateKey());
  const [encryptedQuote, setEncryptedQuote] = useState("");

  const isAlphabetCharacter = (char) => /[a-zA-Z]/.test(char);

  const getWordsFromQuote = () => {
    const wordsMatch = quote.match(/[\w]+[.,'-]?\s?|\s/g);
    return wordsMatch || [];
  };

  const margRight = (char) => {
    if (char === "-" || char === "'") {
      return -1;
    }
    return 4;
  };

  const margBottom = (char) => {
    if (char === "." || char === ",") {
      return 2;
    } else return 0;
  };
  const updateMappings = (updatedMappings) => {
    setMappings(updatedMappings);
  };

  const fetchNewQuote = async () => {
    setMappings("");
    setKey(generateKey());
    try {
      const randomQuote = await fetchQuote();
      setQuote(randomQuote.toUpperCase());

      const encrypted = encrypt(randomQuote, key);
      setEncryptedQuote(encrypted);
    } catch (error) {
      console.error("Error fetching new quote:", error);
    }
  };

  const checkCharacters = () => {
    const updatedMappings = { ...mappings };
    for (const [key, value] of Object.entries(mappings)) {
      if (key !== value) {
        delete updatedMappings[key];
      }
    }
    setMappings(updatedMappings);
  };

  const words = getWordsFromQuote();

  useEffect(() => {
    document.title = "Substitution Cipher";
  });

  return (
    <Container maxWidth={"xl"}>
      <Typography variant="h2" my={3} sx={{ borderBottom: "2px solid black" }}>
        <Link href="/" underline="none" color={"black"}>
          Substition Cipher Game
        </Link>
      </Typography>
      <Typography variant="h4">{encryptedQuote}</Typography>
      <Grid container direction="row" mt={2} spacing={1}>
        {words.map((word, wordIndex) => (
          <Grid item key={wordIndex} display={"flex"}>
            {word.split("").map((char, charIndex) =>
              isAlphabetCharacter(char) ? (
                <CipherInputs
                  key={charIndex}
                  char={char}
                  charIndex={charIndex}
                  mappings={mappings}
                  updateMappings={updateMappings}
                />
              ) : (
                <Typography
                  key={charIndex}
                  style={{
                    fontSize: 50,
                    lineHeight: "40px",
                    textAlign: "center",
                  }}
                  mr={margRight(char)}
                  mt={margBottom(char)}
                >
                  {char}
                </Typography>
              )
            )}
          </Grid>
        ))}
      </Grid>
      <Button
        onClick={checkCharacters}
        sx={{ mt: 3, mr: 2, color: "black", border: "1px solid black" }}
      >
        Check
      </Button>
      <Button
        onClick={fetchNewQuote}
        sx={{ mt: 3, color: "black", border: "1px solid black" }}
      >
        New Game
      </Button>
    </Container>
  );
};

export default CipherGame;
