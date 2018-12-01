import React from 'react'
import { Column, Row } from 'simple-flexbox';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import classNames from 'classnames';


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


const ranges = [
    {
        value: '0-20',
        label: '0 to 20',
    },
    {
        value: '21-50',
        label: '21 to 50',
    },
    {
        value: '51-100',
        label: '51 to 100',
    },
];



class SignupApp extends React.Component {
    state = {
        username: '',
        password: '',
        showPassword: false,
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };


    render() {
        const { classes } = this.props;
        return (

            <Column flexGrow={1}>
                {/*<Row horizontal='center'>*/}
                {/*<h1>HEADER</h1>*/}
                {/*</Row>*/}
                <Row vertical='center'>
                    <Column flexGrow={2} horizontal='center'>
                        <h3> Never forget a thing </h3>
                        <span> Picking up the kids, making laundry, groceries... Remember all anytime, anywhere with Home Life! </span>
                        <img src="family1.jpg" alt="Smiley face"/>
                    </Column>

                    <Column flexGrow={1} horizontal='right'>
                        <h3>Sign Up </h3>
                        <form>

                            <Row vertical='right'>
                                <FormControl className={classes.margin}>
                                    <InputLabel htmlFor="input-with-icon-adornment"> First Name </InputLabel>
                                    <Input
                                        id="input-with-icon-adornment"
                                    />
                                </FormControl>
                            </Row>


                            <Row vertical='right'>
                                <FormControl className={classes.margin}>
                                    <InputLabel htmlFor="input-with-icon-adornment"> Last Name </InputLabel>
                                    <Input
                                        id="input-with-icon-adornment"
                                    />
                                </FormControl>
                            </Row>

                            <Row vertical='right'>
                                <FormControl className={classes.margin}>
                                    <InputLabel htmlFor="input-with-icon-adornment"> Email </InputLabel>
                                    <Input
                                        id="input-with-icon-adornment"
                                    />
                                </FormControl>
                            </Row>

                            <Row vertical='right'>
                                <TextField
                                    id="outlined-adornment-password"
                                    className={classNames(classes.margin, classes.textField)}
                                    // variant="outlined"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    label="Password"
                                    value={this.state.password}
                                    onChange={this.handleChange('password')}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="Toggle password visibility"
                                                    onClick={this.handleClickShowPassword}
                                                >
                                                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Row>

                            <Row vertical='right'>
                                <TextField
                                    id="date"
                                    label="Birthday"
                                    type="date"
                                    defaultValue="1990-05-24"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Row>


                            <Row vertical='right'>
                                <FormControl className={classes.margin}>
                                    <Button variant="contained" color="primary" className={classes.button}>Sign Up</Button>
                                </FormControl>
                            </Row>


                        </form>

                        <Row vertical='end'>
                            <a href=""> Already registered? Sign in now</a>
                        </Row>
                    </Column>
                </Row>
            </Column>

        );
    }

}


SignupApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default LoginSignup;

export default withStyles(styles)(SignupApp);

