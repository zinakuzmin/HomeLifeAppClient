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



class LoginApp extends React.Component {
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
                        <h3>Sign In </h3>
                        <form>

                            <Row vertical='right'>
                            <FormControl className={classes.margin}>
                                <InputLabel htmlFor="input-with-icon-adornment"> User Name </InputLabel>
                                <Input
                                    id="input-with-icon-adornment"
                                />
                            </FormControl>
                            </Row>

                            {/*<Row vertical='right'>*/}
                            {/*<FormControl className={classes.margin}>*/}
                                {/*<InputLabel htmlFor="input-with-icon-adornment"> Password </InputLabel>*/}
                                {/*<Input*/}
                                    {/*id="input-with-icon-adornment"*/}
                                {/*/>*/}
                            {/*</FormControl >*/}
                            {/*</Row>*/}


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
                            <FormControl className={classes.margin}>
                                <label>
                                    <Checkbox/> Remember me
                                </label>
                            </FormControl>
                            </Row>

                            <Row vertical='right'>
                            <FormControl className={classes.margin}>
                                <Button variant="contained" color="primary" className={classes.button}>Log in</Button>
                            </FormControl>
                            </Row>


                        </form>
                       <Row vertical='end'>
                        <a href=""> Don't have an account? Sign up now</a>
                       </Row>
                    </Column>
                </Row>
            </Column>

        );
    }

}


LoginApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default LoginSignup;

export default withStyles(styles)(LoginApp);




// import React, { PropTypes as T } from 'react'
// import {Tabs, Col, Tab, ButtonToolbar, Button, FormGroup, FormControl, ControlLabel, Alert} from 'react-redux-form'
// //import AuthService from 'utils/AuthService'
// // import styles from './styles.module.css'
//
// export class Login extends React.Component {
//     constructor(context) {
//         super()
//         this.state = {
//             user: '',
//             username: '',
//             email: '',
//             password: '',
//             loginError: '',
//             signupError: ''
//         }
//     }
//     static contextTypes = {
//         router: T.object
//     }
//
//     static propTypes = {
//         location: T.object,
//         //auth: T.instanceOf(AuthService)
//     }
//
//     onLoginSubmit(event) {
//         // event.preventDefault()
//         // const { user, password } = this.state
//         // if (user && password) {
//         //     this.props.auth.login(user, password)
//         //         .then(result => {
//         //             if (!result.token) {
//         //                 this.setState({loginError: result.message})
//         //                 return
//         //             }
//         //             this.props.auth.finishAuthentication(result.token)
//         //             this.context.router.push('/profile')
//         //         })
//         // }
//     }
//
//     onSignupSubmit(event) {
//         // event.preventDefault()
//         // const { username, email, password } = this.state
//         // if (username && email && password) {
//         //     this.props.auth.signup(username, email, password)
//         //         .then(result => {
//         //             if (!result.token) {
//         //                 this.setState({signupError: result.message})
//         //                 return
//         //             }
//         //             this.props.auth.finishAuthentication(result.token)
//         //             this.context.router.push('/profile')
//         //         })
//         // }
//     }
//
//     handleChange(event) {
//         this.setState({[event.target.name]: event.target.value})
//     }
//
//     render() {
//         //const { auth } = this.props
//         return (
//             <Col sm={6} smOffset={3}>
//                 <Tabs defaultActiveKey={1} id="loginTabs">
//                     <Tab eventKey={1} title="Log In">
//                         <form onSubmit={this.onLoginSubmit.bind(this)}>
//                             <FormGroup controlId="user">
//                                 <ControlLabel>Username/Email</ControlLabel>
//                                 <FormControl
//                                     type="text"
//                                     placeholder="Enter your username or email"
//                                     name="user"
//                                     value={this.state.user}
//                                     onChange={this.handleChange.bind(this)}
//                                 />
//                             </FormGroup>
//                             <FormGroup controlId="user">
//                                 <ControlLabel>Password</ControlLabel>
//                                 <FormControl
//                                     type="password"
//                                     placeholder="Enter your password"
//                                     name="password"
//                                     value={this.state.password}
//                                     onChange={this.handleChange.bind(this)}
//                                 />
//                             </FormGroup>
//
//                             <Button bsStyle="primary" type="submit">Submit</Button>
//                         </form>
//                         { this.state.loginError &&
//                         <Alert bsStyle="danger">{this.state.loginError}</Alert>
//                         }
//                     </Tab>
//                     <Tab eventKey={2} title="Sign Up">
//                         <form onSubmit={this.onSignupSubmit.bind(this)}>
//                             <FormGroup controlId="user">
//                                 <ControlLabel>Username</ControlLabel>
//                                 <FormControl
//                                     type="text"
//                                     placeholder="Enter your username"
//                                     name="username"
//                                     value={this.state.username}
//                                     onChange={this.handleChange.bind(this)}
//                                 />
//                             </FormGroup>
//                             <FormGroup controlId="user">
//                                 <ControlLabel>Email</ControlLabel>
//                                 <FormControl
//                                     type="text"
//                                     placeholder="Enter your email"
//                                     name="email"
//                                     value={this.state.email}
//                                     onChange={this.handleChange.bind(this)}
//                                 />
//                             </FormGroup>
//                             <FormGroup controlId="user">
//                                 <ControlLabel>Password</ControlLabel>
//                                 <FormControl
//                                     type="password"
//                                     placeholder="Enter your password"
//                                     name="password"
//                                     value={this.state.password}
//                                     onChange={this.handleChange.bind(this)}
//                                 />
//                             </FormGroup>
//                             <Button bsStyle="primary" type="submit">Submit</Button>
//                         </form>
//                         { this.state.signupError &&
//                         <Alert bsStyle="danger">{this.state.signupError}</Alert>
//                         }
//                     </Tab>
//                 </Tabs>
//             </Col>
//         )
//     }
// }
//
// export default Login
