import React from 'react';
import { SnackbarProvider } from 'notistack';
import {
  StylesProvider,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#174578',
      },
    },
    typography: {
      fontFamily: 'PT Sans',
      fontSize: 16,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <SnackbarProvider
          autoHideDuration={2000}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          maxSnack={3}
        >
          <BrowserRouter>
            <GlobalStyle />
            <Routes />
          </BrowserRouter>
        </SnackbarProvider>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
