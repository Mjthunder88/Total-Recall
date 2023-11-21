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

function StartScreen() {
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
          padding: "10rem",
          justifyContent: "space-around",
        }}
      >
        <Typography variant="h2">Total Recall</Typography>
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
          <Button variant="outlined">Start Game</Button>
        </FormControl>
      </Paper>
    </Box>
  );
}

export default StartScreen;
