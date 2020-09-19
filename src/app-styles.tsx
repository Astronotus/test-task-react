import { createStyles, Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const makeAppStyles = makeStyles((theme: Theme) =>
  createStyles({
    appWrapper: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      height: '100vh',
      backgroundColor: 'rgb(126, 187, 128)'
    },
    inputWrapper: {
      marginTop: 30,
      width: '100%',
      borderRadius: 25,
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
    },
    inputMobile: {
      marginLeft: theme.spacing(5),
      height: 100,
      fontSize: '40px',
      flex: 1,
    },
    inputDesktop: {
      marginLeft: theme.spacing(5),
      height: 40,
      fontSize: '20px',
      flex: 1,
    },
    searchIconMobile: {
      marginLeft: theme.spacing(5),
      color: 'black',
      width: 60,
      height: 60
    },
    searchIconDesktop: {
      marginLeft: theme.spacing(5),
      color: 'black',
      width: 30,
      height: 30
    },
    headerTextMobile: {
      marginTop: 30,
      fontSize: 60,
      color: 'white'
    },
    headerTextDesktop: {
      marginTop: 40,
      fontSize: 30,
      color: 'white'
    }
  }),
);
