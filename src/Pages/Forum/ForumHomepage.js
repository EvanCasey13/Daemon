import React, { useContext } from 'react';
import { Navigate, useLocation, Link } from 'react-router-dom';
import AuthContext from "../../AuthContext";
import NavBar from "../../Components/Navbar/Navbar"
import ForumList from '../../Components/ForumList/ForumList';

function ForumHomepage() {
    const location = useLocation();
    const { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate replace to="/login" />;
    }

    return (
        <div className='forumHome'>
            <NavBar />
            <nav>
                <Link to="/"
                    className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Home/
                </Link>
                <Link to="/forumhomepage"
                    className={location.pathname.startsWith("/forumhomepage") ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Forum
                </Link>
            </nav>
            <ForumList />
        </div>
    );

}

export default ForumHomepage;