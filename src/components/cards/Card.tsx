import { Paper } from "@mui/material"

function Card() {
  return (
    <Paper elevation={12} square={false} sx={{width: '200px', height: '200px', backgroundImage: 'url(../assets/santa-hat.png)', backgroundSize: 'fill'}}>
      
    </Paper>
  )
}

export default Card