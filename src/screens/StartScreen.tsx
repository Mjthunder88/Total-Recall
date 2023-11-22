import {
  Typography,
  Button,
  Paper,
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from "@mui/material";

type GameProp = {
  showGameHandler: () => void;
}

function StartScreen({ showGameHandler }: GameProp) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Paper
        elevation={16}
        square={false}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "8rem",
          rowGap: "1rem",
        }}
      >
        <Typography variant="h2">Christmas Recall</Typography>
        <FormControl>
          <FormLabel>Choose Your Number Of Players:</FormLabel>
          <RadioGroup defaultValue="1 Player" row>
            <FormControlLabel
              value="1 Player"
              control={<Radio />}
              label="1 Player"
            />
            <FormControlLabel
              value="2 Players"
              control={<Radio />}
              label="2 Players"
            />
          </RadioGroup>
          <Button variant="contained" onClick={showGameHandler}>Start Game</Button>
        </FormControl>
      </Paper>
    </Box>
  );
}

export default StartScreen;
