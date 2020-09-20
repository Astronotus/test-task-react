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
  emptyListText: {
    fontSize: 32
  },
  taskIcon: {
    width: 20,
    height: 20,
    color: 'rgb(176, 176, 176)'
  }
});
