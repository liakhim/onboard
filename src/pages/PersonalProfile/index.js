import React, {useEffect} from "react";
import { useParams } from 'react-router-dom'
import sidebar from "../../stores/sidebar";
import useFriendStatus from "../../hooks/FriendStatus"
import './style.scss'
export default function PersonalProfile () {
    const {id} = useParams()
    const isOnline = useFriendStatus(id);
    useEffect(() => {
        sidebar.getPost(id)
    }, [id])
    return (
        <div className={"wrapper"}>
            <div className={"top-icons"}>
                <i className={"fas fa-long-arrow-alt-left"}></i>
                <i className={"fas fa-ellipsis-v"}></i>
                <i className={"far fa-heart"}></i>
            </div>
            <pre>
                {JSON.stringify(isOnline)}
            </pre>
            {/*<div className={"profile"}>*/}
            {/*    <img src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w" className={"thumbnail"}/>*/}
            {/*        <div className={"check"}>*/}
            {/*            <i className={"fas fa-check"}></i>*/}
            {/*        </div>*/}
            {/*        <h3 className={"name"}>{sidebar.post.title}</h3>*/}
            {/*        <p className={"title"}>Javascript Developer</p>*/}
            {/*        <p className={"description"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!</p>*/}
            {/*        <button type="button" className={"btn"}>Hire Me</button>*/}
            {/*</div>*/}

            {/*<div className={"social-icons"}>*/}
            {/*    <div className={"icon"}>*/}
            {/*        <a href="#"><i className={"fab fa-dribbble"}></i></a>*/}
            {/*    </div>*/}

            {/*    <div className={"icon"}>*/}
            {/*        <a href="#"><i className={"fab fa-behance"}></i></a>*/}
            {/*    </div>*/}

            {/*    <div className={"icon"}>*/}
            {/*        <a href="#"><i className={"fab fa-twitter"}></i></a>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}
