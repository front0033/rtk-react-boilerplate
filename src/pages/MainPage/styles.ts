import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(7),
      marginTop: theme.spacing(6),
      padding: theme.spacing(3),
      textAlign: 'center',
    },
  })
);

export default useStyles;
