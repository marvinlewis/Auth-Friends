import React, { useState } from "react";
import { axiosWithAuth } from "../utilis/axiosWithAuth";


const Form = (props) => {
    const [ value, setValue ] = useState({
        name : "",
        age : "",
        email : "",
    });

    const handleChanges = e => {
        setValue({ ...value,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/api/friends", value)
        .then(res => { 
            console.log(res);
            props.setData(res.data)
        })
        setValue({
            name: "",
            age: "",
            email: "",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            name="name"
            type="text"
            value={value.name || ""}
            onChange={handleChanges}
            placeholder="Name here..."
            />
            <input
            name="age"
            type="number"
            value={value.age || ""}
            onChange={handleChanges}
            placeholder="Age here..."
            />
            <input
            name="email"
            type="email"
            value={value.email || ""}
            onChange={handleChanges}
            placeholder="Email here..."
            />      
             
            <button>Add A Friend</button>                 
        </form>
    )
}

export default Form;