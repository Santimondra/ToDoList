import * as React from 'react';
import './AddTaskButton.scss';
import { observer } from 'mobx-react';
import { store } from '../../stores/Store';
import { withRouter } from 'react-router';

interface addTaskButtonProps {

}
const AddTaskButton = observer(withRouter((addTaskButtonProps) => {
    return (
        <button>AGREGAR</button>
    )
}));

export default AddTaskButton;