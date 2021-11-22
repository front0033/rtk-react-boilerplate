import React from 'react';

import { Grid, Typography } from '@mui/material';
import { useGetItemsQuery } from 'redux/stores/items/itemsSlice';

import useStyles from './styles';

const MainPage: React.FC = () => {
  const classes = useStyles();
  const { data, isLoading, isError, isSuccess } = useGetItemsQuery('test-params');

  // eslint-disable-next-line no-console
  console.log(data, isLoading, isError, isSuccess);

  return (
    <Grid container direction="column" alignItems="center" className={classes.root}>
      <Typography variant="h4">Main Page</Typography>
    </Grid>
  );
};

export default MainPage;
