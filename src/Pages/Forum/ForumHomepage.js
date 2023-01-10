import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from "../../AuthContext";
import NavBar from "../../Components/Navbar/Navbar"
import ForumList from '../../Components/ForumList/ForumList';

function ForumHomepage() {

    const { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate replace to="/login" />;
    }

    return (
        <div className='forumHome'>
            <NavBar />
            <ForumList />
        </div>
    );

}

export default ForumHomepage;