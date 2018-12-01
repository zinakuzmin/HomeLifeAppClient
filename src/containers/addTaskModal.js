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
                            {/*<FormControl className={classes.formControl}>*/}
                            {/*<InputLabel htmlFor="age-native-simple">Age</InputLabel>*/}
                            {/*<Select*/}
                            {/*native*/}
                            {/*value={this.state.age}*/}
                            {/*onChange={this.handleChange('age')}*/}
                            {/*input={<Input id="age-native-simple" />}*/}
                            {/*>*/}
                            {/*<option value="" />*/}
                            {/*<option value={10}>Ten</option>*/}
                            {/*<option value={20}>Twenty</option>*/}
                            {/*<option value={30}>Thirty</option>*/}
                            {/*</Select>*/}
                            {/*</FormControl>*/}
                            {/*<FormControl className={classes.formControl}>*/}
                            {/*<InputLabel htmlFor="age-simple">Age</InputLabel>*/}
                            {/*<Select*/}
                            {/*value={this.state.age}*/}
                            {/*onChange={this.handleChange('age')}*/}
                            {/*input={<Input id="age-simple" />}*/}
                            {/*>*/}
                            {/*<MenuItem value="">*/}
                            {/*<em>None</em>*/}
                            {/*</MenuItem>*/}
                            {/*<MenuItem value={10}>Ten</MenuItem>*/}
                            {/*<MenuItem value={20}>Twenty</MenuItem>*/}
                            {/*<MenuItem value={30}>Thirty</MenuItem>*/}
                            {/*</Select>*/}
                            {/*</FormControl>*/}
                            <Container>
                                <Row>
                                    <FormControl className={classes.margin}>
                                        <InputLabel htmlFor="input-with-icon-adornment">Add task name</InputLabel>
                                        <Input
                                            id="input-with-icon-adornment"
                                            // startAdornment={
                                            //     <InputAdornment position="start">
                                            //     </InputAdornment>
                                            // }
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

// export default SwitchLabels;

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Modal from '@material-ui/core/Modal';
// import Button from '@material-ui/core/Button';
// import TaskCreateForm from '../forms/task-create-form';
// import { Form, Control } from 'react-redux-form';
//
// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// }
//
// function getModalStyle() {
//     const top = 50 + rand();
//     const left = 50 + rand();
//
//     return {
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: `translate(-${top}%, -${left}%)`,
//     };
// }
//
// const styles = theme => ({
//     paper: {
//         position: 'absolute',
//         width: theme.spacing.unit * 50,
//         backgroundColor: theme.palette.background.paper,
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing.unit * 4,
//     },
// });
//
// class TaskModal extends React.Component {
//     state = {
//         open: false,
//     };
//
//     handleOpen = () => {
//         this.setState({ open: true });
//     };
//
//     handleClose = () => {
//         this.setState({ open: false });
//     };
//
//     render() {
//         const { classes } = this.props;
//
//         return (
//             <div>
//                 <Typography gutterBottom>Click to get the full Modal experience!</Typography>
//                 <Button onClick={this.handleOpen}>Open Modal</Button>
//                 <Modal
//                     aria-labelledby="simple-modal-title"
//                     aria-describedby="simple-modal-description"
//                     open={this.state.open}
//                     onClose={this.handleClose}
//                 >
//                     <div style={getModalStyle()} className={classes.paper}>
//                         {/*<Typography variant="h6" id="modal-title">*/}
//                             {/*Text in a modal*/}
//                         {/*</Typography>*/}
//                         {/*<Typography variant="subtitle1" id="simple-modal-description">*/}
//                             {/*Duis mollis, est non commodo luctus, nisi erat porttitor ligula.*/}
//                         {/*</Typography>*/}
//                         {/*/!*<SimpleModalWrapped />*!/*/}
//                         <Form
//                             model="tasks"
//                             onSubmit={(val) => this.handleSubmit(val)}
//                         >
//                             <label>Your name?</label>
//                             <Control.text model="tasks" />
//
//                             <label>
//                                 <Control.checkbox model="tasks" />
//                                 Remember me
//                             </label>
//
//                             <button>Submit!</button>
//                         </Form>
//
//                     </div>
//                     {/*<TaskCreateForm/>*/}
//
//
//                     {/*<Form*/}
//                         {/*model="task"*/}
//                         {/*onSubmit={(val) => this.handleSubmit(val)}*/}
//                     {/*>*/}
//                         {/*<label>Task Title</label>*/}
//                         {/*<Control.text model="task.title" />*/}
//                         {/*<label>Task Description</label>*/}
//                         {/*<Control.text model="task.description" />*/}
//
//
//
//                         {/*<button>Submit!</button>*/}
//                     {/*</Form>*/}
//
//
//
//
//
//
//
//                 </Modal>
//             </div>
//
//
//         );
//     }
// }
//
// TaskModal.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
//
//
//
//
// // We need an intermediary variable for handling the recursive nesting.
// const SimpleModalWrapped = withStyles(styles)(TaskModal);
//
// export default SimpleModalWrapped;