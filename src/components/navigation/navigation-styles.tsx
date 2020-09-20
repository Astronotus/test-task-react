import { makeStyles } from '@material-ui/core/styles';

export const makeNavigationStyles = makeStyles({
  root: {
    marginTop: 2,
    borderRadius: 12,
    display: 'flex'
  },
  navLabels: {
    fontSize: 10,
    color: 'black',
  },
  navIcon: {
    width: 30,
    height: 30
  }
});
