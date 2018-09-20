import * as React from 'react';
import './Login.scss';
import { observer } from 'mobx-react';
import { store } from '../../stores/Store';
import { withRouter } from 'react-router';
import FormLogin from '../../components/FormLogin/FormLogin';

interface LoginProps {}

@observer export class Login extends React.Component<LoginProps> {

    render() {
        return (
            <FormLogin/>
        )
    }
}