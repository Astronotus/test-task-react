import React, { useContext } from 'react';
import { useParams } from 'react-router';

import { Box, Typography, useMediaQuery } from '@material-ui/core';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';

import Task from '../../components/task/task';
import { TaskModel } from '../../core/tasks/task.model';
import { makeTasksListStyles } from './tasks-list-styles';
import { taskLists } from '../../core/tasks/task-lists.moc';
import { TasksFilterContext } from '../../core/tasks/tasks-filter-context';

const TasksList: React.FC = () => {

  const classes = makeTasksListStyles();
  const filterValue = useContext(TasksFilterContext);
  const { page } = useParams();
  const list: TaskModel[] = taskLists
    .find(e => e.listType === page)
    .tasks
    .filter(str => str.text.toLocaleLowerCase('en-US')
      .startsWith(filterValue.toLocaleLowerCase('en-US')));
  const isDesktop: boolean = useMediaQuery('(min-width: 1281px)');

  return (
    <>
      {
        list.length > 0 ? list.map(e => <Task key={e.id} text={e.text} whenCreated={e.whenCreated}/>) :
        <Box className={classes.emptyListAlertWrapper}>
          <AccessibilityNewIcon className={isDesktop ? classes.emptyListIcon : classes.emptyListIconMobile}/>
          <Typography className={isDesktop ? null : classes.emptyListTextMobile}>It is empty here...</Typography>
        </Box>
      }
    </>
  );
};

export default TasksList;
