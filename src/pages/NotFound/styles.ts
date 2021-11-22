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
    actions: {
      marginTop: theme.spacing(6),
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    },
    icon: {
      color: theme.palette.error.dark,
      height: 72,
      marginBottom: theme.spacing(4),
      width: 72,
    },
  })
);

export default useStyles;
