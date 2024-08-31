import { Stack, Typography } from '@mui/material';

interface FormBoardProps {
  children: React.ReactNode;
  title: string;
}

export default function FormBoard({ children, title }: FormBoardProps) {
  return (
    <Stack spacing={3}>
      <Typography variant="h3" textAlign="center">
        {title}
      </Typography>
      <form>
        <Stack spacing={2}>{children}</Stack>
      </form>
    </Stack>
  );
}
