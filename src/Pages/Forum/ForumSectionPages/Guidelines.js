import React from "react";
import NavBar from "../../../Components/Navbar/Navbar"
import AddForumPost from "../../../Components/Forum/ForumSections/Guidelines/AddForumPostGuidelines";
import ForumPostsListGuidelines from "../../../Components/Forum/ForumSections/Guidelines/ForumPostsListGuidelines";
import { useLocation, Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const Guidelines = () => {
    const breadcrumbs = useBreadcrumbs();
    const location = useLocation();
    return (
        <div className="Guidelines">
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
            <AddForumPost />
            <ForumPostsListGuidelines />
        </div>
    );
};

export default Guidelines;