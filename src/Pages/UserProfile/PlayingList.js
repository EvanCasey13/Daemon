import React, { useState, useEffect } from "react";
import { auth, db } from "../../Firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth"

const PlayingList = () => {
    const getList = () => {
        onAuthStateChanged(auth, (user) => {      
            const snapRef2 = collection(db, "users/" + user.uid + "/favourites")
            onSnapshot(snapRef2, (snapshot) => {
                const favourites = []
                snapshot.forEach((doc) => {
                    favourites.push(doc.data())
                })
                console.log(favourites)
            })
            });
       }
       
    return (
        getList()
    )
};

export default PlayingList;