import React from 'react';
import {connect} from 'react-redux';

class TaskDetails extends React.Component {
    render() {
        if (!this.props.task){
            return (<h3>Select a task...</h3>);
        }
        return (
            <div>
                {/*<img src={this.props.user.thumbnail}/>*/}
                <h2>Task Title: {this.props.task.title}</h2>
                <h3>Task description: {this.props.task.description}</h3>
                <h3>Assignee: {this.props.task.assignee}</h3>
                <h3>Age limitation: {this.props.task.ageLimitation}</h3>
                <h3>Should be able to drive: {this.props.task.drivingLisenceRequired}</h3>
                <h3>Date: {this.props.task.date}</h3>
                <h3>Time: {this.props.task.time}</h3>
            </div>
        );
    }
}



function  mapStateToProps(state) {
    return {
        task:state.activeTask
    };
}

export default connect(mapStateToProps)(TaskDetails);