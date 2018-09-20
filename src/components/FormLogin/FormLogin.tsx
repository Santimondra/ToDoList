import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/Store';
import { withRouter } from 'react-router';

import './FormLogin.scss';

interface formLoginProps {

}

const FormLogin = observer(withRouter((formLoginProps) => {
    return (
        <article>
            <div>
                <h1>Log In Form</h1>
            </div>
            <form onSubmit={(event) => {
                event.preventDefault();
                formLoginProps.history.push("/admin")
            }
            }>
                <span>E-Mail</span>
                <input className="mail" type="email" placeholder="example@gmail.com"/>
                <span>Password</span>
                <input className="pass" type="password" placeholder="••••••••"/>
                <button id="toRegister" onClick={() => {
                        formLoginProps.history.push("/");
                    }}
                >I do not have an account, I wish to register</button>
                <button type="submit">Log In</button>
            </form>
        </article>
    )
}));

export default FormLogin;