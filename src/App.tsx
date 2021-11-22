import React, { ReactElement } from 'react';
import { ruRU } from '@mui/material/locale';
import { CssBaseline, AppBar, Typography, Grid, createTheme } from '@mui/material';
import { Switch, Route } from 'react-router-dom';
import routes from 'routes';
import MainPage from 'pages/MainPage';
import NotFoundPage from 'pages/NotFound';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

const theme = createTheme({}, ruRU);

interface IApp {}

const App: React.FC<IApp> = (): ReactElement => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <AppBar position="fixed" title="REACT APP">
          <Grid container wrap="nowrap" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">REACT APP</Typography>
          </Grid>
        </AppBar>
        <CssBaseline />
        <Switch>
          <Route exact path={routes.main()}>
            <MainPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </StyledEngineProvider>
    </ThemeProvider>
  </StyledEngineProvider>
);

export default App;
