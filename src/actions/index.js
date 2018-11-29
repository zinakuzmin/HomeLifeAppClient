import {ADD_TASK, SELECT_TASK, SELECT_USER, TASK_DONE} from "../constants/ActionTypes";

export const selectUser = (user) => {
  console.log("Clicked on: " , user.first);
  return {
      type: SELECT_USER,
      payload: user
  }
};



export const selectTask = (task) => {
    console.log("Clicked on: " , task.title);
    return {
        type: SELECT_TASK,
        payload: task
    }
};



export const completeTask = (task) => {
    console.log("Clicked on: " , task.title);
    task.title =  task.title + "done"
    return {
        type: TASK_DONE,
        payload: task
    }
};


export const addTask = () => {
    console.log("Clicked on : " , ADD_TASK);
    return {
        type: ADD_TASK,
        payload: null
    }
};


