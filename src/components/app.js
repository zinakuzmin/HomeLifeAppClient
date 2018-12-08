import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from '../forms/login'
import Signup from '../forms/signup'
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-details';
import TasksList from '../containers/tasks-list';
import TaskDetais from '../containers/task-details';
import Header from "./Header";
//import Footer from "./Footer";
import Navbar from "./Navbar";
require('../scss/style.scss');





const App = () => (
    <BrowserRouter>
    <div>
        {/*<Header/>*/}
        <Navbar />
        {/*<h2>Username list:</h2>*/}
        {/*<UserList/>*/}
        {/*<hr/>*/}
        {/*<h2>User details:</h2>*/}
        {/*<UserDetails />*/}
        {/*<hr/>*/}

        <Route path='/login' component={Login}/>
        <h1>Tasks list:</h1>
        <TasksList/>
        <hr/>
        <h2>Task details:</h2>
        <TaskDetais />
        {/*<Footer/>*/}
    </div>
    </BrowserRouter>
);


export default App;