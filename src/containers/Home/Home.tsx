import * as React from 'react';
import './Home.scss';
import { observer } from 'mobx-react';
import { store } from '../../stores/Store';
import { withRouter } from 'react-router';
import ToDoList from '../../components/ToDoList/ToDoList';
import AddTaskButton from '../../components/AddTaskButton/AddTaskButton';

interface HomeProps {}

@observer export class Home extends React.Component<HomeProps> {

    render() {
        return (
            <section>
                <ToDoList/>
                <AddTaskButton/>
            </section>
        )
    }
}