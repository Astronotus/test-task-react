import React from 'react';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Box, Container, Typography, useMediaQuery } from '@material-ui/core';

import { makeTaskStyles } from './task-styles';

const Task = ({ text, whenCreated }) => {

  const classes = makeTaskStyles();
  const isDesktop: boolean = useMediaQuery('(min-width: 1281px)');

  return (
    <Container className={isDesktop ? classes.cardDesktop : classes.cardMobile}>
      <Typography className={isDesktop ? classes.text : classes.textMobile}>{text}</Typography>
      <Box className={classes.rightColumnWrapper}>
        <Typography className={isDesktop ? classes.time : classes.timeMobile}>{whenCreated} min.</Typography>
        <ArrowForwardIosIcon className={isDesktop ? classes.arrowButtonIcon : classes.arrowButtonIconMobile}/>
      </Box>
    </Container>
  );
};

export default Task;
