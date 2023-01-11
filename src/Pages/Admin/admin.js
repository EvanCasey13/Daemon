import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from "../../AuthContext";
import NavBar from "../../Components/Navbar/Navbar"

function Admin() {

    const { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate replace to="/login" />;
    }

    return (
        <div className='admin'>
            <NavBar />
            <h1>This is the Admin page</h1>
        </div>
    );

}

export default Admin;