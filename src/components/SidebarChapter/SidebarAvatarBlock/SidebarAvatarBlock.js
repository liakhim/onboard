import React from "react";
import './style.scss'
import sidebar from "../../../stores/sidebar";
import { Link } from 'react-router-dom'
const SidebarAvatarBlock = (props) => {
    return (
        <Link to={`/profile/${props.id}`}
             className={'avatar-block'}>
            <img src={props.imageUrl}
                 className="rounded-circle"
                 style={{width: props.width}}
                 alt="Avatar"/>
        </Link>
    )
}
SidebarAvatarBlock.defaultProps = {
    id: 0,
    imageUrl: "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp",
    width: "60px"
};
export default SidebarAvatarBlock
