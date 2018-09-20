import * as React from 'react';
import './FormRegister.scss';
import { observer } from 'mobx-react';
import { store } from '../../stores/Store';
import { withRouter } from 'react-router';

interface formRegisterProps {

}
const FormRegister = observer(withRouter((formRegisterProps) => {
    return (

        <article>
            <h1>Register Form</h1>
            <form onSubmit={() => {
                formRegisterProps.history.push("/login");
                store.addUser();
            }
            }>
                <span>Name</span>
                <input className="name" type="text" placeholder="Santiago" onChange={(e) => store.handleInput(e.target.value, "name")} />
                <span>Last Name</span>
                <input className="name" type="text" placeholder="Mondragón" onChange={(e) => store.handleInput(e.target.value, "lastname")} />
                <span>Email</span>
                <input id="mail" type="email" placeholder="tucorreo@gmail.com" onChange={(e) => store.handleInput(e.target.value, "mail")} />
                <span>Password</span>
                <input id="pass" type="password" placeholder="••••••••" onChange={(e) => store.handleInput(e.target.value, "pass")} />

                <button id="toLogin" onClick={() => {
                    formRegisterProps.history.push("/login");
                }}
                >I already have an account</button>

                <button type="submit">Register</button>

            </form>
        </article>
    )
}));

export default FormRegister;