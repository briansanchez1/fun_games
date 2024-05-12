import React, { useEffect } from "react";
import GameCards from "../components/game_cards";
import { Container, Grid, Typography } from "@mui/material";
import cipher from "../assets/Cipher.png";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  });

  return (
    <Container>
      <Typography variant="h3" mb={2}>
        Brian's Favorite Games
      </Typography>
      <Grid container direction="row" spacing={1}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <GameCards
            gameName={"Cipher Game"}
            gameDesc={
              "This is a game about deciphering a generated quote that has been scrambled using a substitution cipher method."
            }
            image={cipher}
            gameLink={"cipher_game"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <GameCards gameName={"Game 2"} />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <GameCards gameName={"game 3"} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
