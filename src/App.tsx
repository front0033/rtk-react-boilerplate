import React, { ReactElement } from 'react';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ruRU } from '@material-ui/core/locale';
import { CssBaseline, AppBar, Typography, Grid, createTheme } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import routes from 'routes';
import MainPage from 'pages/MainPage';
import NotFoundPage from 'pages/NotFound';

const theme = createTheme({}, ruRU);

interface IApp {}

const App: React.FC<IApp> = (): ReactElement => (
  <MuiThemeProvider theme={theme}>
    <StylesProvider injectFirst>
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
    </StylesProvider>
  </MuiThemeProvider>
);

export default App;
