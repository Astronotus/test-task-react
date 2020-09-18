import { makeStyles } from '@material-ui/core/styles';

export const makeNavigationStyles = makeStyles({
  root: {
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 25,
    width: '100%',
  },
  rootMobile: {
    marginTop: 30,
    borderRadius: 25,
    width: '100%',
  },
  navLabelsDesktop: {
    color: 'black',
    fontSize: 24
  },
  navLabelsMobile: {
    color: 'black',
    fontSize: 24
  },
  navIconMobile: {
    width: 60,
    height: 60
  },
  navIconDesktop: {
    width: 30,
    height: 30
  },
});
