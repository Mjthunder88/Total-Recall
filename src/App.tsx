import { Container } from "@mui/material";
import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";

function App() {
  return (
    <Container maxWidth={"lg"} sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <StartScreen />
    </Container>
  );
}

export default App;
