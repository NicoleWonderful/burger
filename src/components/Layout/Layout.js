import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';

const Layout = (props) => (
    <Aux>
        <div>Toolbar,slideDrawer,Backdrop</div>
        <main className={styles.content}>
            {props.children}
        </main>
    </Aux>
);
export default Layout;
