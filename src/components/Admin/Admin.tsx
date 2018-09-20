import * as React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';

import './Admin.scss';

import { store } from '../../stores/Store';

interface IAdminProps{}

@observer class Admin extends React.Component<IAdminProps> {
    
    render(){
        return <article className="admin">
                <header>
                    
                </header>
                <section className="content">
                    <article className="sideBar">
                    
                    </article>
                    <article className="dashboard">
                        
                    </article>
                </section>
            </article>
    }
}
export default Admin;