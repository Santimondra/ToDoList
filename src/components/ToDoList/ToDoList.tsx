import * as React from 'react';
import './ToDoList.scss';
import { observer } from 'mobx-react';
import { store } from '../../stores/Store';
import { withRouter } from 'react-router';

interface toDoListProps {

}
const ToDoList = observer(withRouter((toDoListProps) => {
    return (
        <ul>
            {store.fines.map((elem: any, index: number) =>
                    <li key={elem}
                        // onClick={() => {
                        //     store.onChangeFineSelected(elem)
                        // }}
                        // className={store.fineSelected === elem ? 'fineSelected' : ''}
                        // style={{
                        //     display: store.fineSelected[3] === "Applied" || "Dismissed" ? "flex": "none"
                        // }}
                    >
                        <p>{elem}</p>
                    </li>
                )}
        </ul>
    )
}));

export default ToDoList;