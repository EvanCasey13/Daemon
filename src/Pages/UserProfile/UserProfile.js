import React from "react";
import UserCard from "../../Components/User/UserCard";
import UserList from "../../Components/User/UserList";
function UserProfile() {

    return (
   <div className="userProfile">
   <UserCard />
   <UserList />
   </div>
    )
}

export default UserProfile;