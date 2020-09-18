import { makeStyles } from '@material-ui/core/styles';

export const makeTasksListStyles = makeStyles({
  emptyListAlertWrapper: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyListIcon: {
    color: 'rgb(126, 187, 128)',
    width: 40,
    height: 40
  },
  emptyListIconMobile: {
    color: 'rgb(126, 187, 128)',
    width: 80,
    height: 80
  },
  emptyListTextMobile: {
    fontSize: 32
  }
});
