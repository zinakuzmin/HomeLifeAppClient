import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-details';
import TasksList from '../containers/tasks-list';
import TaskDetais from '../containers/task-details';
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
require('../scss/style.scss');



const App = () => (

    <div>
        {/*<Header/>*/}
        <Navbar />
        {/*<h2>Username list:</h2>*/}
        {/*<UserList/>*/}
        {/*<hr/>*/}
        {/*<h2>User details:</h2>*/}
        {/*<UserDetails />*/}
        {/*<hr/>*/}


        <h1>Tasks list:</h1>
        <TasksList/>
        <hr/>
        <h2>Task details:</h2>
        <TaskDetais />
        {/*<Footer/>*/}
    </div>

);


export default App;