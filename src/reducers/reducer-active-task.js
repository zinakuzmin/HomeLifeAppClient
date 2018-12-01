import {ADD_TASK, SELECT_TASK, TASK_DONE} from "../constants/ActionTypes";

export default function (state=null, actions) {
    switch (actions.type){
        case SELECT_TASK:
            return actions.payload;
            break;
        case TASK_DONE:
            return actions.payload;
            break;
        case ADD_TASK:
            return actions.payload;
            break;
    }
    return state;
}