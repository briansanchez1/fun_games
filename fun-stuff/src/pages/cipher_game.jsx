import React, { useState, useEffect, useContext } from "react";

const CipherGame = () => {
  useEffect(() => {
    document.title = "Cipher Game";
  });
  return (
    <body>
      <h1>Cipher Text Game</h1>
      <p>This is where I show the quote</p>

      <p>
        There also needs to be a few inputs that are formatted in a specific way
        so that they are only one character, and a valid character
      </p>


      <a href="/">Dashboard</a>

    </body>
  );
};

export default CipherGame;
