import React from 'react';
import './navigation.css';
import { withRouter } from 'react-router';

import { useMediaQuery } from '@material-ui/core';
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
  const isDesktop: boolean = useMediaQuery('(min-width: 1281px)');

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
      className={isDesktop ? classes.root : classes.rootMobile}>
      <BottomNavigationAction
        classes={isDesktop ? null : { label: classes.navLabelsDesktop }}
        label='Income'
        value='income'
        onClick={() => handleClick('/income')}
        icon={<MonetizationOnIcon className={isDesktop ? classes.navIconDesktop : classes.navIconMobile}/>}/>}/>
      <BottomNavigationAction
        classes={isDesktop ? null : { label: classes.navLabelsDesktop }}
        label='Expenses'
        value='expenses'
        onClick={() => handleClick('/expenses')}
        icon={<ShoppingCartIcon className={isDesktop ? classes.navIconDesktop : classes.navIconMobile}/>}/>}/>
      <BottomNavigationAction
        classes={isDesktop ? null : { label: classes.navLabelsDesktop }}
        label='Savings'
        value='savings'
        onClick={() => handleClick('/savings')}
        icon={<SentimentVerySatisfiedIcon className={isDesktop ? classes.navIconDesktop : classes.navIconMobile}/>}/>}/>
      <BottomNavigationAction
        classes={isDesktop ? null : { label: classes.navLabelsDesktop }}
        label='Debt'
        value='debt'
        onClick={() => handleClick('/debt')}
        icon={<ImportExportIcon className={isDesktop ? classes.navIconDesktop : classes.navIconMobile}/>}/>
      <BottomNavigationAction
        classes={isDesktop ? null : { label: classes.navLabelsDesktop }}
        label='Goals'
        value='goals'
        onClick={() => handleClick('/goals')}
        icon={<TrendingUpIcon className={isDesktop ? classes.navIconDesktop : classes.navIconMobile}/>}/>
      <BottomNavigationAction
        classes={isDesktop ? null : { label: classes.navLabelsDesktop }}
        label='Emergency'
        value='emergency'
        onClick={() => handleClick('/emergency')}
        icon={<PageviewIcon className={isDesktop ? classes.navIconDesktop : classes.navIconMobile}/>}/>
    </BottomNavigation>
  );
};

export default withRouter(Navigation);
