import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {addTask} from "../actions";


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

class AddTaskFloatingButton extends React.Component {

   render() {
        return (
            <div>
                <Button variant="fab" color="primary" aria-label="Add" className="button-zina" onClick={() => this.props.addTask()}>
                    <AddIcon />
                </Button>
            </div>
        );
    }


}


AddTaskFloatingButton.propTypes = {
    classes: PropTypes.object.isRequired,
};


function  mapStateToProps(state) {
    return {
        task:state.createTask
    };
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({addTask: addTask}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(AddTaskFloatingButton);


// export default withStyles(styles)(FloatingAddButton);