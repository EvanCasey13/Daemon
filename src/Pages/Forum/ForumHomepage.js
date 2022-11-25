import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from "../../AuthContext";
import NavBar from "../../Components/Navbar/Navbar"

function ForumHomepage() {

    const { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate replace to="/login" />;
    }

    return (
        <div className='forumHome'>
            <NavBar />
            <h1>This is the Forum Homepage</h1>
        </div>
    );

}

export default ForumHomepage;