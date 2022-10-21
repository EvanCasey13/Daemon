import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from "../../AuthContext";

function ForumHomepage() {

    const { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate replace to="/login" />;
        }

    return (
       <h1>This is the Forum Homepage</h1>
    );

}

export default ForumHomepage;