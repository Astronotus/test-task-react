import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PageviewIcon from '@material-ui/icons/Pageview';


import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withRouter } from 'react-router';

const useStyles = makeStyles({
  root: {
    borderRadius: 25,
    width: '100%',
  },
});
const Navigation = (props: any) => {
  const { history } = props;

  const classes = useStyles();
  const [ value, setValue ] = React.useState('recents');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  const handleClick = (pageUrl: string) => {
    history.push(pageUrl);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} showLabels className={classes.root}>
      <BottomNavigationAction label="Income" value="income" onClick={() => handleClick('/income')}
                              icon={<MonetizationOnIcon/>}/>
      <BottomNavigationAction label="Expenses" value="expenses" onClick={() => handleClick('/expenses')}
                              icon={<ShoppingCartIcon/>}/>
      <BottomNavigationAction label="Savings" value="savings" onClick={() => handleClick('/savings')}
                              icon={<SentimentVerySatisfiedIcon/>}/>
      <BottomNavigationAction label="Debt" value="debt" onClick={() => handleClick('/debt')}
                              icon={<ImportExportIcon/>}/>
      <BottomNavigationAction label="Goals" value="goals" onClick={() => handleClick('/goals')}
                              icon={<TrendingUpIcon/>}/>
      <BottomNavigationAction label="Emergency" value="emergency" onClick={() => handleClick('/emergency')}
                              icon={<PageviewIcon/>}/>
    </BottomNavigation>
  );
};

export default withRouter(Navigation);
