import React from 'react';
import {connect} from 'react-redux';

class UserDetail extends React.Component {
    render() {
        if (!this.props.user){
            return (<h3>Select a user...</h3>);
        }
        return (
            <div>
                <img src={this.props.user.thumbnail}/>
                <h2>First Name: {this.props.user.first}</h2>
                <h3>Last Name: {this.props.user.last}</h3>
                <h3>Age: {this.props.user.age}</h3>
            </div>
        );
    }
}



function  mapStateToProps(state) {
    return {
        user:state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);