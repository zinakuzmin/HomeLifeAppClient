import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FiberNew from '@material-ui/icons/FiberNew';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Container, Row, Col } from 'reactstrap';
import {connect} from "react-redux";


/*
    Setting rows and columns(Installed):   https://reactstrap.github.io/components/layout/
    Setting ag-grid(need Installation):    https://www.ag-grid.com/react-getting-started/
                                           https://www.ag-grid.com/javascript-grid-cell-rendering-components/
 */

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

class DialogSelect extends React.Component {
    state = {
        open: false,
        age: '',
    };

    handleChange = name => event => {
        this.setState({ [name]: Number(event.target.value) });
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleCloseDontSave = () => {
        console.log("cancel - close don't save task")
        this.setState({ open: false });
    };

    handleAddTaskAndClose = () => {
        console.log("Save data and close")
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        this.countryData = this.props.users


        // this.state.data.countryData = "USA"

        this.countryData = [
            { value: 'USA', name: 'USA' },
            { value: 'CANADA', name: 'CANADA' }
        ];


        this.state.data = {
            country: "Zina"
        };

        return (
            <div>
                {/*<Button onClick={this.handleClickOpen}>Open select dialog</Button>*/}
                <Button variant="fab" color="primary" aria-label="Add" className="button-zina" onClick={this.handleClickOpen}>
                    <AddIcon />
                </Button>
                <Dialog
                    disableBackdropClick
                    disableEscapeKeyDown
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <DialogTitle>Create a new task</DialogTitle>
                    <DialogContent>
                        <form className={classes.container}>
                            <Container>
                                <Row>
                                    <FormControl className={classes.margin}>
                                        <InputLabel htmlFor="input-with-icon-adornment">Add task name</InputLabel>
                                        <Input
                                            id="input-with-icon-adornment"
                                        />
                                    </FormControl>
                                </Row>
                                <Row>
                                    <TextField
                                        className={classes.margin}
                                        id="input-with-icon-textfield"
                                        label="Task description"
                                        // InputProps={{
                                        //     startAdornment: (
                                        //         <InputAdornment position="start">
                                        //         </InputAdornment>
                                        //     ),
                                        // }}
                                    />
                                </Row>
                                <Row>
                                    <TextField
                                        id="datetime-local"
                                        label="When"
                                        type="datetime-local"
                                        defaultValue="2018-05-24T10:30"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        // InputProps={{
                                        //     startAdornment: (
                                        //         <InputAdornment position="start">
                                        //         </InputAdornment>
                                        //     ),
                                        // }}
                                    />
                                </Row>
                                <Row>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={this.state.checkedA}
                                                onChange={this.handleChange('checkedA')}
                                                value="checkedA"
                                            />
                                        }
                                        label="Is driving license required"
                                    />
                                </Row>
                                <Row>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={this.state.checkedA}
                                                onChange={this.handleChange('checkedA')}
                                                value="checkedB"
                                            />
                                        }
                                        label="Is adult task"
                                    />
                                </Row>
                                <Row>
                                    <TextField
                                        className={classes.margin}
                                        id="input-with-icon-textfield"
                                        label="Task assignee"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Row>
                                <Row>
                                    {/*<select name="country" value={this.state.data.country}>*/}
                                        {/*/!*<select name="country" value={this.state.data.country}>*!/*/}
                                        {/*{this.props.users.map((user) => {*/}
                                            {/*return <option key={user.id} value={user.firstName}>{user.firstName}</option>;*/}
                                        {/*})}*/}
                                    {/*</select>*/}
                                </Row>

                                <Row>
                                    <select name="country" value={this.state.data.country}>
                                        {this.countryData.map((e, key) => {
                                            return <option key={key} value={e.value}>{e.name}</option>;
                                        })}
                                    </select>


                                </Row>
                                {/*<div className={classes.margin}>*/}
                                {/*<Grid container spacing={8} alignItems="flex-end">*/}
                                {/*<Grid item>*/}
                                {/*<AccountCircle />*/}
                                {/*</Grid>*/}
                                {/*<Grid item>*/}
                                {/*<TextField id="input-with-icon-grid" label="With a grid" />*/}
                                {/*</Grid>*/}
                                {/*</Grid>*/}
                                {/*</div>*/}

                            </Container>
                        </form>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseDontSave} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleAddTaskAndClose} color="primary">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}


DialogSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DialogSelect);



class SwitchLabels extends React.Component {
    state = {
        checkedA: true,
        checkedB: true,
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.checked});
    };
}

function  mapStateToProps(state) {
    return {
        users:state.users
    };
}

connect(mapStateToProps)(DialogSelect);