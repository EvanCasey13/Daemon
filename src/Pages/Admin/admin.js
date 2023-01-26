import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from "../../AuthContext";
import NavBar from "../../Components/Navbar/Navbar";
import UserTable from '../../Components/Admin/UserTable';

function Admin() {

    const { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate replace to="/login" />;
    }

    return (
        <div className='admin'>
            <NavBar />
            <UserTable />
        </div>
    );

}

export default Admin;