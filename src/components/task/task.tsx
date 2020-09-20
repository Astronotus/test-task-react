import React from 'react';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Box, Container, Typography } from '@material-ui/core';

import { makeTaskStyles } from './task-styles';

const Task = ({ text, whenCreated }) => {

  const classes = makeTaskStyles();

  return (
    <Container className={classes.card}>
      <Typography className={classes.text}>{text}</Typography>
      <Box className={classes.rightColumnWrapper}>
        <Typography className={classes.time}>{whenCreated} min.</Typography>
        <ArrowForwardIosIcon className={classes.arrowButtonIcon}/>
      </Box>
    </Container>
  );
};

export default Task;
