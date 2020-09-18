import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';

import { makeMainContentStyles } from './main-styles';
import TasksList from '../tasks-list/tasks-list';
import Navigation from '../../components/navigation/navigation';

const Main = () => {

  const classes = makeMainContentStyles();

  return (
    <Router>
      <Box className={classes.mainContent}>
        <Navigation/>
        <Switch>
          <Route path='/:page'>
            <TasksList/>
          </Route>
        </Switch>
      </Box>
    </Router>
  );
};

export default Main;
