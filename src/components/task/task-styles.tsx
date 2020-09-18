import makeStyles from '@material-ui/core/styles/makeStyles';
import { createStyles } from '@material-ui/core';

export const makeTaskStyles = makeStyles(() =>
  createStyles({
    cardDesktop: {
      height: 60,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '2px dashed gainsboro',
    },
    cardMobile: {
      height: 100,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '3px dashed gainsboro',
    },
    text: {
      width: 800,
      fontSize: 24
    },
    textMobile: {
      width: 800,
      fontSize: 32
    },
    rightColumnWrapper: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    time: {
      color: 'rgb(176, 176, 176)'
    },
    timeMobile: {
      fontSize: 24,
      color: 'rgb(176, 176, 176)'
    },
    arrowButtonIcon: {
      width: 20,
      height: 20,
      marginLeft: 10
    },
    arrowButtonIconMobile: {
      width: 26,
      height: 26,
      marginLeft: 10
    }
  }),
);
