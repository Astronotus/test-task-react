import React, { useContext } from 'react';
import { useParams, withRouter } from 'react-router';

import { Box, Typography } from '@material-ui/core';
import PageviewIcon from '@material-ui/icons/Pageview';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

import Task from '../../../components/task/task';
import { TaskModel } from '../../../core/tasks/task.model';
import { makeTasksListStyles } from './tasks-list-styles';
import { tasksLists } from '../../../core/tasks/task-lists.moc';
import { TasksListDto } from '../../../core/tasks/tasks-list.dto';
import { TasksFilterContext } from '../../../core/tasks/tasks-filter-context';

const TasksList = ({ history }) => {

    const classes = makeTasksListStyles();
    const searchValue = useContext(TasksFilterContext);
    const { currentPage } = useParams();

    const findThisPageList = (list: TasksListDto[]): TasksListDto => {
      return list.find(e => e.listType === currentPage);
    };

    const searchTasks = (list: TasksListDto): TaskModel[] => {
      if (list) {
        return list.tasks.filter(str => str.text.toLocaleLowerCase('en-US')
          .includes(searchValue.toLocaleLowerCase('en-US')));
      } else {
        history.push('/income');
        window.location.reload();
      }
      // проверка на список тут из за того что если вводишь неправильный url, сыпяться ошибки
      // и редирект в роуте не помагает :)
      // это частное решение, при запросах на сервер, такого небыло б :)
    };

    const tasksList = searchTasks(findThisPageList(tasksLists));

    const chooseCurrentPageIcon = () => {
      switch (currentPage) {
        case 'emergency' :
          return <PageviewIcon className={classes.taskIcon}/>;
        case 'goals' :
          return <TrendingUpIcon className={classes.taskIcon}/>;
        case 'expenses' :
          return <ShoppingCartIcon className={classes.taskIcon}/>;
        case 'debt' :
          return <ImportExportIcon className={classes.taskIcon}/>;
        case 'income' :
          return <MonetizationOnIcon className={classes.taskIcon}/>;
        case 'savings' :
          return <SentimentVerySatisfiedIcon className={classes.taskIcon}/>;
      }
    };

    return (
      <>
        {
          tasksList.length > 0 ? tasksList.map(e =>
              <Task
                key={e.id}
                text={e.text}
                tasksIcon={chooseCurrentPageIcon()}
                isLocked={e.isLocked}
                whenCreated={e.whenCreated}
              />) :
            <Box className={classes.emptyListAlertWrapper}>
              <AccessibilityNewIcon className={classes.emptyListIcon}/>
              <Typography>It is empty here...</Typography>
            </Box>
        }
      </>
    );
  }
;

export default withRouter(TasksList);
