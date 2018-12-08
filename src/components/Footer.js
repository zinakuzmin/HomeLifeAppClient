import React from 'react';
import AddTaskDialog from '../containers/addTaskModal'
import AddGroceryListDialog from '../containers/addGroceryListDialog'
import OpenIconSpeedDial from '../components/AddButtonFastAccess'

export default class Footer extends React.Component{
    render() {
        return (
            <div>
                <footer>footer</footer>
                <AddTaskDialog/>
                <AddGroceryListDialog/>
                <OpenIconSpeedDial/>
            </div>
        );
    }
}