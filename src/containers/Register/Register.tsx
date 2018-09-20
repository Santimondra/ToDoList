import * as React from 'react';
import './Register.scss';
import { observer } from 'mobx-react';
import { store } from '../../stores/Store';
import { withRouter } from 'react-router';
import FormRegister from '../../components/FormRegister/FormRegister';

interface RegisterProps {}

@observer export class Register extends React.Component<RegisterProps> {

    render() {
        return (
            <FormRegister/>
        )
    }
}