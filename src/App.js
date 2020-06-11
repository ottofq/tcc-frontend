import React from 'react';
import { SnackbarProvider } from 'notistack';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
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
  );
}

export default App;
