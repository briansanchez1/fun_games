import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const Game_Cards = ({ gameName, gameDesc, gameLink, image }) => {
  return (
    <Card sx={{ borderRadius: "15px", border: "1px solid black" }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }}>{gameName}</Typography>
        <Typography sx={{ fontSize: 14 }}>{gameDesc}</Typography>
      </CardContent>
      <CardMedia component="img" image={image} />
      <Button
        href={gameLink ? "/" + gameLink : "/"}
        sx={{
          my: 1,
          border: "1px solid black",
          color: "black",
          justifyContent: "center",
        }}
      >
        Play
      </Button>
    </Card>
  );
};

export default Game_Cards;
