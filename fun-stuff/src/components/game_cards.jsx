import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Game_Cards = ({ gameName, gameDesc, gameLink }) => {
  return (
    <Card sx={{borderRadius: "15px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }}>{gameName}</Typography>
        <Typography sx={{ fontSize: 14 }}>{gameDesc}</Typography>
      </CardContent>
      <Button
        href={gameLink ? "/" + gameLink : "/"}
        sx={{ justifyContent: "center" }}
      >
        Play
      </Button>
    </Card>
  );
};

export default Game_Cards;
