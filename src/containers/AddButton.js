import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import {bindActionCreators} from 'redux';
// import {connect} from "react-redux";
import {addTask} from "../actions";


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

function FloatingAddButton(props) {
    const { classes } = props;
    return (
        <div>
            <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
                <AddIcon />
            </Button>
        </div>
    );
}

FloatingAddButton.propTypes = {
    classes: PropTypes.object.isRequired,
};



function matchDispatchToProps(dispatch) {
    return bindActionCreators({addTask: addTask}, dispatch)
}
// export default connect(mapStateToProps, matchDispatchToProps)(TasksList);


export default withStyles(styles)(FloatingAddButton);