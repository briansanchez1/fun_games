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
  const [author, setAuthor] = useState("");
  const [mappings, setMappings] = useState({});
  const [key, setKey] = useState(generateKey());
  const [encryptedQuote, setEncryptedQuote] = useState("");
  const isAlphabetCharacter = (char) => /[a-zA-Z]/.test(char);

  const getWordsFromQuote = (quote) => {
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
      setQuote(randomQuote[1].toUpperCase());
      setAuthor(randomQuote[0]);

      const encrypted = encrypt(randomQuote[1], key);
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

  const words = getWordsFromQuote(quote);

  const encryptedWords = getWordsFromQuote(encryptedQuote);

  useEffect(() => {
    document.title = "Substitution Cipher";
  });

  return (
    <Container maxWidth={"lg"}>
      <Typography variant="h2" my={3} sx={{ borderBottom: "2px solid black" }}>
        <Link href="/" underline="none" color={"black"}>
          Substition Cipher Game
        </Link>
      </Typography>
      <Typography variant="h4" textAlign={"left"}>
        {quote === "" ? null : "Quote by "}
        {author}
      </Typography>

      <Grid container direction="row" my={2} spacing={1}>
        {words.map((word, wordIndex) => (
          <Grid item key={wordIndex} display={"flex"}>
            {word.split("").map((char, charIndex) =>
              isAlphabetCharacter(char) ? (
                <CipherInputs
                  key={charIndex}
                  char={char}
                  encryptedChar={encryptedWords[wordIndex]}
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

      {quote === "" ? (
        <>
          <Button
            onClick={fetchNewQuote}
            sx={{ mt: 1, color: "black", border: "1px solid black" }}
          >
            Start Game
          </Button>
          <Typography variant="h4" textAlign={"left"}>
            How it works:
          </Typography>
          <Typography variant="h5" textAlign={"left"} mt={2}>
            You are given a quote which has had most or all of it's characters
            shuffled. It is up to you to solve this puzzle and figure out what
            the original quote was.{" "}
          </Typography>
          <Typography variant="h5" textAlign={"left"} mt={2}>
            For example, if the original quote was "Hello World.", then the
            encrypted quote could be something like "Pobbe Aedbs."{" "}
          </Typography>
          <Typography
            variant="h5"
            textAlign={"left"}
            mt={2}
            fontWeight={"bold"}
          >
            It is important to note that it is possible for the letter to be the
            same as the original. You could end up with "Polle Aedls."
          </Typography>
        </>
      ) : (
        <>
          <Button
            onClick={checkCharacters}
            sx={{ my: 3, mr: 2, color: "black", border: "1px solid black" }}
          >
            Check
          </Button>{" "}
          <Button
            onClick={fetchNewQuote}
            sx={{ my: 3, color: "black", border: "1px solid black" }}
          >
            New Game
          </Button>
        </>
      )}
    </Container>
  );
};

export default CipherGame;
