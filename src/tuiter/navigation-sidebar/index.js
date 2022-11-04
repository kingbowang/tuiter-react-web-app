import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa-solid fa-icons me-2"/>
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        <span>Tuiter</span>
                    </div>
                </div>
            </a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa-solid fa-house me-2"/>
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        <span>Home</span>
                    </div>
                </div>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa-solid fa-hashtag me-2"/>
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        <span>Explore</span>
                    </div>
                </div>
            </Link>
            <Link to="/" className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <i className="fa-solid fa-star-of-life me-2"/>
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        <span>Labs</span>
                    </div>
                </div>
            </Link>
            <a className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa-regular fa-bell me-2"/>
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        <span>Notifications</span>
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa-regular fa-envelope me-2"/>
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        <span>Messages</span>
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa-regular fa-bookmark me-2"/>
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        <span>Bookmark</span>
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa-regular fa-rectangle-list me-2"/>
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        <span>Lists</span>
                    </div>
                </div>
            </a>
            <Link to="/tuiter/profile" className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa-regular fa-user me-2"/>
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        <span>Profile</span>
                    </div>
                </div>
            </Link>
            <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa-solid fa-ellipsis me-2"/>
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        <span>More</span>
                    </div>
                </div>
            </a>
        </div>
    );
};
export default NavigationSidebar;