import Card from "../components/cards/Card";
import { Container, Button, Box, Paper } from "@mui/material";

type GameProp = {
  showGameHandler: () => void;
};

function GameScreen({ showGameHandler }: GameProp) {
  return (
    <>
      <Paper elevation={16} square={false} sx={{ minHeight: "80vh", minWidth: '80vw' }}>
        <Card />
      </Paper>
        <Box sx={{ textAlign: "center", padding: "1rem 0" }}>
          <Button variant="contained" onClick={showGameHandler}>
            Start New Game
          </Button>
        </Box>
    </>
  );
}

export default GameScreen;
