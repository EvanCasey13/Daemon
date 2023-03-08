import React from "react";
import NavBar from "../../../Components/Navbar/Navbar";
import AddForumPost from "../../../Components/Forum/ForumSections/Support/AddForumPostSupport";
import ForumPostsListSupport from "../../../Components/Forum/ForumSections/Support/ForumPostListSupport";
import { useLocation, Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const Support = () => {
    const breadcrumbs = useBreadcrumbs();
    const location = useLocation();
    return (
        <div className="Support">
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
            <ForumPostsListSupport />
        </div>
    );
};

export default Support;