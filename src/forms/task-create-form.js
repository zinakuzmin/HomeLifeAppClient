import React from 'react';
import { Form, Control } from 'react-redux-form';

class TaskCreateForm extends React.Component {
    handleSubmit(values) {
        // Do anything you want with the form value
        console.log(values);
    }

    render() {
        return (
            <Form
                model="task"
                onSubmit={(val) => this.handleSubmit(val)}
            >
                <label>Task Title</label>
                <Control.text model="task.title"
                              validators={{
                                  required: (val) => !!val.length,
                                  minLength: (val) => val.length > 8,
                              }}
                />
                {/*<Errors*/}
                    {/*model="task.title"*/}
                    {/*messages={{*/}
                        {/*required: 'Task title is required.',*/}
                        {/*minLength: 'Task title must be more than 8 characters.',*/}
                    {/*}}*/}
                {/*/>*/}

                <label>Task Description</label>
                <Control.text model="task.description" />



                <button>Submit!</button>
            </Form>
        );
    }
}

// No need to connect()!
export default TaskCreateForm;