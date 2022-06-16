import React, { useEffect } from 'react';
import './MainLayout.scss';
import SidebarAvatarBlock from "../components/SidebarChapter/SidebarAvatarBlock/SidebarAvatarBlock";
import sidebar from "../stores/sidebar.js"
const Layout =({children}) =>{
    useEffect(() => {
        sidebar.fetchProjects()
    }, [])
    return(
        <div className={'main-layout-wrapper'}>
            <div className="sidebar">
                <div className="avatar-block-wrapper">
                    <SidebarAvatarBlock id={1}/>
                </div>
                <div className="avatar-block-wrapper">
                    <SidebarAvatarBlock
                        id={2}
                        imageUrl={'https://mdbcdn.b-cdn.net/img/new/avatars/6.webp'}/>
                </div>
                <div className="avatar-block-wrapper">
                    <SidebarAvatarBlock
                        id={3}
                        imageUrl={'https://mdbcdn.b-cdn.net/img/new/avatars/5.webp'}/>
                </div>
            </div>
            <div className="content">
                <div className="container-fluid">
                    <header className={'header'}>
                        test left side
                    </header>
                    <main className={'main'}>{children}</main>
                    <footer className={'footer'}>
                        <p>footer text</p>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Layout;
