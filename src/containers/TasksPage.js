import React from 'react'
import TasksList from '../containers/tasks-list'
import TaskDetails from '../containers/task-details'
// import FamilyMemberPicker from "./FamilyMemberPicker";

class TasksPage extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return (
            <div>
                <h1>Tasks list:</h1>
                <TasksList/>
                <hr/>
                <h2>Task details:</h2>
                <TaskDetails />
            </div>
        )

    };
}


export default TasksPage;



