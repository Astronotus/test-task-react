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
      borderBottom: '2px dotted gainsboro',
    },
    text: {
      marginLeft: 14,
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
      fontSize: 14,
      color: 'rgb(176, 176, 176)'
    },
    arrowButtonIcon: {
      width: 14,
      height: 14,
      marginLeft: 4
    },
    lockedTaskText: {
      color: 'rgb(176, 176, 176)'
    },
    lockedTaskWrapper: {
      marginLeft: 14,
      width: 800,
      display: 'flex',
      flexDirection: 'column'
    },
    lockedTaskLabel: {
      fontSize: 10,
      color: 'rgb(176, 176, 176)'
    }
  }),
);
