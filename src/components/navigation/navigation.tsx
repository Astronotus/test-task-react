import React from 'react';
import './navigation.css';
import { withRouter } from 'react-router';

import PageviewIcon from '@material-ui/icons/Pageview';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

import { makeNavigationStyles } from './navigation-styles';

const Navigation = ({ history }) => {

  const classes = makeNavigationStyles();
  const [ value, setPageName ] = React.useState('income');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setPageName(newValue);
  };

  const handleClick = (pageUrl: string) => {
    history.push(pageUrl);
  };

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={handleChange}
      className={classes.root}>
      <BottomNavigationAction
        classes={{ label: classes.navLabels }}
        label='Income'
        value='income'
        onClick={() => handleClick('/income')}
        icon={<MonetizationOnIcon className={classes.navIcon}/>}/>}/>
      <BottomNavigationAction
        classes={{ label: classes.navLabels }}
        label='Expenses'
        value='expenses'
        onClick={() => handleClick('/expenses')}
        icon={<ShoppingCartIcon className={classes.navIcon}/>}/>}/>
      <BottomNavigationAction
        classes={{ label: classes.navLabels }}
        label='Savings'
        value='savings'
        onClick={() => handleClick('/savings')}
        icon={<SentimentVerySatisfiedIcon className={classes.navIcon}/>}/>}/>
      <BottomNavigationAction
        classes={{ label: classes.navLabels }}
        label='Debt'
        value='debt'
        onClick={() => handleClick('/debt')}
        icon={<ImportExportIcon className={classes.navIcon}/>}/>
      <BottomNavigationAction
        classes={{ label: classes.navLabels }}
        label='Goals'
        value='goals'
        onClick={() => handleClick('/goals')}
        icon={<TrendingUpIcon className={classes.navIcon}/>}/>
      <BottomNavigationAction
        classes={{ label: classes.navLabels }}
        label='Emergency'
        value='emergency'
        onClick={() => handleClick('/emergency')}
        icon={<PageviewIcon className={classes.navIcon}/>}/>
    </BottomNavigation>
  );
};

export default withRouter(Navigation);
