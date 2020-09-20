import { makeStyles } from '@material-ui/core/styles';

export const makeNavigationStyles = makeStyles({
  root: {
    borderRadius: 25,
    display: 'flex'
  },
  navLabels: {
    fontSize: 10,
    color: 'black',
  },
  navIcon: {
    width: 20,
    height: 20
  }
});
