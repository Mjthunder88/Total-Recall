import Card from "../components/cards/Card"
import { Container, Button } from "@mui/material"

type GameProp = {
  showGameHandler: () => void;
}

function GameScreen({showGameHandler}: GameProp) {
  return (
    <Container>
        <Card />
        <Button variant="contained" onClick={showGameHandler}>Start New Game</Button>
    </Container>
  )
}

export default GameScreen