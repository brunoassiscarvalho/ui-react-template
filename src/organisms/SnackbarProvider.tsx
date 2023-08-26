import { SnackbarProvider as NotistackSnackbarProvider } from 'notistack';
import SnackbarCloseButton from '../molecules/SnackbarCloseButton';
import { ReactElement } from 'react';
interface PropsSnackbarProvider {
  children: ReactElement;
}

export default function SnackbarProvider({ children }: PropsSnackbarProvider) {
  return (
    <NotistackSnackbarProvider maxSnack={3} action={(key) => <SnackbarCloseButton snacKey={key} />}>
      {children}
    </NotistackSnackbarProvider>
  );
}
