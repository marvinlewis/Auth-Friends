import React from "react";

const FriendList = ({ friends }) => {
    return (
        <div>
            <p>{friends.name}</p>
            <p>{friends.age}</p>
            <p>{friends.email}</p>
        </div>
    )
}

export default FriendList;