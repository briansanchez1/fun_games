import React, { useState, useEffect, useContext } from "react";
import GameCards from "../components/game_cards";
import { Container } from "@mui/material";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  });
  return (
    <Container>
      <GameCards />
      <GameCards />
      <GameCards />
    </Container>
  );
};

export default Dashboard;
