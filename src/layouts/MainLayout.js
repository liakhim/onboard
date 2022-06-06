import React from 'react';
import './MainLayout.scss';
const Layout =({children}) =>{
    return(
        <div className={'main-layout-wrapper'}>
            <div className={'header'} style={{border: '1px solid red'}}>
                test left side
            </div>
            <main className={'content'}>{children}</main>
            <footer className={'footer'}>
                <p>footer test</p>
            </footer>
        </div>
    )
}

export default Layout;
