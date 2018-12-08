

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
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Container, Row, Col } from 'reactstrap';
import DialogContentText from '@material-ui/core/DialogContentText';


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

class AddGroceryListDialog extends React.Component {
    state = {
        open: false,
        age: '',
    };

    items = [
       "nameItem1", "blabla", "dchsghsg"
    ];


    handleChange = name => event => {
        this.setState({ [name]: Number(event.target.value) });
    };




    // handleClickOpen = () => {
    //     this.setState({ open: true });
    // };

    handleClickOpen = scroll => () => {
        this.setState({ open: true, scroll });
    };

    handleCloseDontSave = () => {
        console.log("cancel - close don't save task")
        this.setState({ open: false });
    };

    handleAddTaskAndClose = () => {
        console.log("Save data and close")
        this.setState({ open: false });
    };

    handleAddItemSubmit = (event) =>{
        event.preventDefault();
        if (this.textInput != undefined){
            console.log(this.textInput.value);
            this.items.push(this.textInput.value);
        }
        console.log(this.items)
        // this.render();
        // this.props.onSearchTermSubmit(this.textInput.value);
    }

    // handleAddItem = () => {
    //     //event.preventDefault();
    //     if (this.textInput != undefined){
    //         console.log(this.textInput.value);
    //         this.items.add(this.textInput.value)
    //     }
    //
    //     // items.add(item);
    //     // console.log(items);
    //     // this.props.tasks.map((task) => {
    //     //     var date = new Date();
    //     //     console.log("My date " + date);
    //     //     if (task.isTaskCompleted == false)
    //     //         return (
    //     //             <li key={task.id} onClick={() => this.props.selectTask(task)}>
    //     //                 <Checkbox/> {task.title} : {task.description}
    //     //             </li>
    //     //         );
    // };


    createItemList(){
        return this.items.map((item) => {
            return (
                <li key={item.id}>{item}</li>
            );
        });
    };

    render(){
        const {classes} = this.props;

        return (
            <div>
                {/*<Button onClick={this.handleClickOpen}>Open select dialog</Button>*/}

                <Button variant="fab" color="primary" aria-label="Add" className="button-zina"
                        onClick={this.handleClickOpen('paper')}>
                    <AddShoppingCart/>
                </Button>
                {/*<Button onClick={this.handleClickOpen('paper')}>scroll=paper</Button>*/}
                {/*<Button onClick={this.handleClickOpen('body')}>scroll=body</Button>*/}
                <Dialog
                    disableBackdropClick
                    disableEscapeKeyDown
                    open={this.state.open}
                    onClose={this.handleClose}
                    scroll={this.state.scroll}
                    aria-labelledby="scroll-dialog-title"
                >
                    <DialogTitle>Create a new grocery list</DialogTitle>
                    <DialogContent>
                        <form className={classes.container}>

                            <Container>
                                <Row>
                                    <FormControl className={classes.margin}>
                                        <InputLabel htmlFor="input-with-icon-adornment">Add list name</InputLabel>
                                        <Input
                                            id="input-with-icon-adornment"
                                        />
                                    </FormControl>
                                </Row>
                                <Row>
                                    <TextField
                                        className={classes.margin}
                                        id="input-with-icon-textfield"
                                        label="Assign to task"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle/>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Row>

                                <div className="ListOfItems" style={{borderColor: '#fffff'}}>
                                    {console.log("from list " + this.createItemList())}
                                    <ul>
                                        {this.createItemList()}
                                    </ul>
                                </div>



                            </Container>
                        </form>





                        <div className="AddItem">
                            <form onSubmit={this.handleAddItemSubmit}>
                                <input type="text" ref={(input) => this.textInput = input} />
                                <button>Add</button>
                            </form>
                        </div>


                    </DialogContent>
                    <DialogActions>
                        {/*<Button  onClick={this.handleAddItem()}>Add</Button>*/}
                        <Button onClick={this.handleCloseDontSave} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleAddTaskAndClose} color="primary">
                            Ok
                        </Button>
                    </DialogActions>



                </Dialog>

                {/*<div className="SearchBar">*/}
                    {/*<h1>SearchBar</h1>*/}
                    {/*<form onSubmit={this.handleAddItemSubmit}>*/}
                        {/*<input type="text" ref={(input) => this.textInput = input} />*/}
                        {/*<button>Search</button>*/}
                        {/*<button type="button">Random (doesn't do anything)</button>*/}
                    {/*</form>*/}
                {/*</div>*/}

            </div>
        );
    }
}


AddGroceryListDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddGroceryListDialog);



class SwitchLabels extends React.Component {
    state = {
        checkedA: true,
        checkedB: true,
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.checked});
    };
}
