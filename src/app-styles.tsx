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
      marginTop: 20,
      width: '100%',
      borderRadius: 12,
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
    },
    input: {
      marginLeft: 10,
      height: 40,
      fontSize: 16,
      flex: 1,
    },
    searchIcon: {
      marginLeft: 10,
      color: 'black',
      width: 30,
      height: 30
    },
    headerText: {
      marginTop: 20,
      fontSize: 20,
      color: 'white'
    }
  }),
);
