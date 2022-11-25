import React from "react";
import UserCard from "../../Components/User/UserCard";
import UserList from "../../Components/User/UserList";
import NavBar from "../../Components/Navbar/Navbar"
function UserProfile() {

    return (
   <div className="userProfile">
    <NavBar />
   <UserCard />
   <UserList />
   </div>
    )
}

export default UserProfile;