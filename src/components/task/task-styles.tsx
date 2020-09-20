import makeStyles from '@material-ui/core/styles/makeStyles';
import { createStyles } from '@material-ui/core';

export const makeTaskStyles = makeStyles(() =>
  createStyles({
    card: {
      height: 60,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '2px dashed gainsboro',
    },
    text: {
      width: 800,
    },
    rightColumnWrapper: {
      width: 400,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    time: {
      fontSize: 12,
      color: 'rgb(176, 176, 176)'
    },
    arrowButtonIcon: {
      width: 10,
      height: 10,
      marginLeft: 10
    }
  }),
);
