import React, { useState } from 'react';

import SearchIcon from '@material-ui/icons/Search';
import { Container, InputBase, Paper, Typography } from '@material-ui/core';

import Main from './containers/main/main';
import { makeAppStyles } from './app-styles';
import { TasksFilterContext } from './core/tasks/tasks-filter-context';

const App: React.FC = () => {

  const classes = makeAppStyles();
  const [ filterValue, setFilterValue ] = useState('');

  return (
    <Container maxWidth={'md'} className={classes.appWrapper}>
      <Typography className={ classes.headerText }>
        We can helps with lots of things. Browse or search for what you need.
      </Typography>
      <Paper component='form' className={classes.inputWrapper}>
        <SearchIcon className={classes.searchIcon }/>
        <InputBase
          className={classes.input }
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
