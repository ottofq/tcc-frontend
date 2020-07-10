import React from 'react';
import { SnackbarProvider } from 'notistack';
import {
  StylesProvider,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import SnackBar from 'components/Snackbar';
import GlobalStyle from './styles/global';
import Routes from './routes';
import { store, persistor } from './redux';

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
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <StylesProvider injectFirst>
            <SnackBar />
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
      </PersistGate>
    </Provider>
  );
}

export default App;
