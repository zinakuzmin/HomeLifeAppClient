import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectTask} from "../actions";
import Checkbox from '@material-ui/core/Checkbox';

class TasksList extends Component{

    createTaskItems() {
        return this.props.tasks.map((task) => {
            var date = new Date();
            console.log("My date " + date);
            if (task.isTaskCompleted == false)
            return (
                <li key={task.id} onClick={() => this.props.selectTask(task)}>
                   <Checkbox/> {task.title} : {task.description}
                </li>
            );
        });
    }



    render() {
        return(
            <ul>
                {this.createTaskItems()}
            </ul>
        );
    }
}

function  mapStateToProps(state) {
    return {
        tasks:state.tasks
    };
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectTask: selectTask}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(TasksList);