import React, { useContext } from 'react';
import { Navigate, useLocation, Link } from 'react-router-dom';
import AuthContext from "../../AuthContext";
import NavBar from "../../Components/Navbar/Navbar"
import ForumList from '../../Components/ForumList/ForumList';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

function ForumHomepage() {
    const breadcrumbs = useBreadcrumbs();
    const location = useLocation();
    const { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate replace to="/login" />;
    }

    return (
        <div className='forumHome'>
            <NavBar />
            <nav>
                {breadcrumbs.map(({ match, breadcrumb }) => (
                    <Link
                        key={match.url}
                        to={match.url}
                        className={match.pathname === location.pathname ? "breadcrumb-active" : "breadcrumb-not-active"}
                    >
                        {breadcrumb}/
                    </Link>
                ))}
            </nav>
            <ForumList />
        </div>
    );

}

export default ForumHomepage;