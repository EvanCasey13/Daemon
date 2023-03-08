import React from "react";
import NavBar from "../../../Components/Navbar/Navbar"
import AddForumPost from "../../../Components/Forum/ForumSections/UpdatesAndAnnouncements/AddForumPostUA";
import ForumPostsListUA from "../../../Components/Forum/ForumSections/UpdatesAndAnnouncements/ForumPostsListUA";
import { useLocation, Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const Announcements = () => {
    const breadcrumbs = useBreadcrumbs();
    const location = useLocation();
    return (
        <div className="Announcement">
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
            <ForumPostsListUA />
        </div>
    );
};

export default Announcements;