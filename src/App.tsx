import React, { useState } from 'react';

import SearchIcon from '@material-ui/icons/Search';
import { Container, InputBase, Paper, Typography, useMediaQuery } from '@material-ui/core';

import Main from './containers/main/main';
import { makeAppStyles } from './app-styles';
import { TasksFilterContext } from './core/tasks/tasks-filter-context';

const App: React.FC = () => {

  const classes = makeAppStyles();
  const isDesktop: boolean = useMediaQuery('(min-width: 1281px)');
  const [ filterValue, setFilterValue ] = useState('');

  return (
    <Container className={classes.appWrapper}>
      <Typography className={isDesktop ? classes.headerTextDesktop : classes.headerTextMobile}>
        We can helps with lots of things. Browse or search for what you need.
      </Typography>
      <Paper component='form' className={classes.root}>
        <SearchIcon className={isDesktop ? classes.searchIconDesktop : classes.searchIconMobile}/>
        <InputBase
          className={isDesktop ? classes.inputDesktop : classes.inputMobile}
          placeholder='What do you need help with?'
          inputProps={{ 'aria-label': 'search google maps' }}
          onChange={(e) => setFilterValue(e.target.value)}
        />
      </Paper>
      <TasksFilterContext.Provider value={filterValue}>
        <Main/>
      </TasksFilterContext.Provider>
    </Container>
  );
};

export default App;
