import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from "../../AuthContext";
import NavBar from "../../Components/Navbar/Navbar";
import UserTable from '../../Components/Admin/UserTable';
import { useLocation, Link } from 'react-router-dom';

function Admin() {
    const location = useLocation();
    const { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate replace to="/login" />;
    }

    return (
        <div className='admin'>
            <NavBar />
            <nav>
                <Link to="/"
                    className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Home/
                </Link>
                <Link to="/admin"
                    className={location.pathname.startsWith("/admin") ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Admin
                </Link>
            </nav>
            <UserTable />
        </div>
    );

}

export default Admin;