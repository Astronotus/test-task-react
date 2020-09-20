import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';

import TasksList from './tasks-list/tasks-list';
import { makeMainContentStyles } from './main-styles';
import Navigation from '../../components/navigation/navigation';

const Main = () => {

  const classes = makeMainContentStyles();

  return (
    <Router>
      <Box className={classes.mainContent}>
        <Switch>
          <Redirect exact from='/' to='/income'/>
          <Route path='/:currentPage'>
            <Navigation/>
            <TasksList/>
          </Route>
          <Redirect to='/income' />
        </Switch>
      </Box>
    </Router>
  );
};

export default Main;
