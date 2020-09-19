import makeStyles from '@material-ui/core/styles/makeStyles';
import { createStyles } from '@material-ui/core';

export const makeMainContentStyles = makeStyles(() =>
  createStyles({
    mainContent: {
      height: '100%',
      marginTop: 40,
      background: 'white',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25
    }
  })
);
