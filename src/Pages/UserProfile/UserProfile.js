import React from "react";
import UserList from "../../Components/User/UserList";
import NavBar from "../../Components/Navbar/Navbar"
function UserProfile() {
    return (
   <div className="userProfile">
    <NavBar />
   <UserList />
   </div>
    )
}

export default UserProfile;