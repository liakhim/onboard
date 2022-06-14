import React from "react";
import './style.scss'
import Sidebar from "../../../stores/sidebar";
const sidebar = new Sidebar();
const SidebarAvatarBlock = (props) => {
    return (
        <div onClick={() => sidebar.getPost(55)}
             className={'avatar-block'}>
            <img src={props.imageUrl}
                 className="rounded-circle"
                 style={{width: props.width}}
                 alt="Avatar"/>
        </div>
    )
}
SidebarAvatarBlock.defaultProps = {
    imageUrl: "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp",
    width: "60px"
};
export default SidebarAvatarBlock
