import React from 'react'
import TasksList from '../containers/tasks-list'
import TaskDetails from '../containers/task-details'




class FamilyMemberPicker extends React.Component {
    constructor(props) {
        super(props);


        familyMembers = ["Zina", "Dima"];


        render()
        {
            return (
                <div>
                    <select name="member" value="Choose Family member">
                        {familyMembers.map((e, key) => {
                            return <option key={key} value={e}>{e}</option>;
                        })}
                    </select>
                </div>

            );

        }
    }
}


export default FamilyMemberPicker;



