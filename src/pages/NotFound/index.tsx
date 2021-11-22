import * as React from 'react';

import { Button, Grid, Typography } from '@mui/material';
import SentimentVeryDissatisfied from '@mui/icons-material/SentimentVeryDissatisfied';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const NotFoundPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center" className={classes.root}>
      <SentimentVeryDissatisfied className={classes.icon} />
      <Typography variant="h5" gutterBottom id="no-found-title">
        404 Page not found.
      </Typography>
      <div className={classes.actions}>
        <Button id="not-found-button-back" component={Link} to="/" variant="outlined" color="primary">
          Return to main page
        </Button>
      </div>
    </Grid>
  );
};

export default NotFoundPage;
