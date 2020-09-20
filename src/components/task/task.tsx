import React from 'react';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Box, Container, Typography } from '@material-ui/core';

import { makeTaskStyles } from './task-styles';

const Task = ({ text, whenCreated, isLocked, tasksIcon }) => {

  const classes = makeTaskStyles();

  return (
    <Container className={classes.card}>
      {tasksIcon}
      {isLocked ?
        <Box className={classes.lockedTaskWrapper}>
          <Typography className={isLocked ? classes.lockedTaskText : classes.text}>{text}</Typography>
          <Typography className={classes.lockedTaskLabel}>(locked)</Typography>
        </Box> :
        <Typography className={classes.text}>{text}</Typography>
      }
      <Box className={classes.rightColumnWrapper}>
        <Typography className={classes.time}>{whenCreated} min.</Typography>
        <ArrowForwardIosIcon className={classes.arrowButtonIcon}/>
      </Box>
    </Container>
  );
};

export default Task;
