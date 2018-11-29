import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import TaskReducer from './task-reducer'
import ActiveUserReducer from "./reducerActiveUser"
import ActiveTaskReducer from './reducer-active-task'

const allReducers = combineReducers({
    users: UserReducer,
    tasks: TaskReducer,
    activeUser: ActiveUserReducer,
    activeTask: ActiveTaskReducer
});


export default allReducers;