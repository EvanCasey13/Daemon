import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from "../../AuthContext";
import NavBar from "../../Components/Navbar/Navbar"
import { useLocation, Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

function About() {
    const breadcrumbs = useBreadcrumbs();
    const location = useLocation();
    const { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate replace to="/login" />;
    }

    return (
        <div className='about'>
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
            <h1>This is the About page</h1>
        </div>
    );

}

export default About;