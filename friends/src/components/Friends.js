import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utilis/axiosWithAuth";
import FriendList from "./FriendList";
import Form from "./Form";


const Friends = () => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            //console.log(res);
            setData(res.data)
        })
    }, [])
    return(
        <div>
            <h2>Friends Page</h2>
            <Form setData={setData}/>
            {data.map(item => 
            <div key={item.id}>
            <FriendList friends={item}/>
            </div>
            )}
        </div>
    )
}

export default Friends;