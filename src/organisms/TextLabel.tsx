import { InputLabel, Stack, Typography } from "@mui/material";

export interface PropsTextLabel {
  text: string;
  label: string | number;
}

export default function TextLabel({text, label}: PropsTextLabel){
  return(
  <Stack>
    <InputLabel  >{label}</InputLabel>
    <Typography variant="body1">{text} </Typography>
</Stack>
);
}
