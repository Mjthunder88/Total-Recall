import { Box } from "@mui/material";
import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";

import { useState } from "react";



function App() {
  const [showGame, setShowGame] = useState(false);

  const showGameHandler = () => {
    return setShowGame(!showGame);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#276841",
      }}
    >
      {showGame ? (
        <GameScreen showGameHandler={showGameHandler} />
      ) : (
        <StartScreen showGameHandler={showGameHandler} />
      )}
    </Box>
  );
}

export default App;
