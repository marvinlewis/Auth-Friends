import React, { useState } from "react";
import axios from "axios";


const Login = (props) => {
    const [ value, setValue ] = useState({
        username : "",
        password : "",
    })

    const handleChanges = (e) => {
        setValue({... value,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", value)
        .then(res => {
            //console.log(res)
            localStorage.setItem("token", res.data.payload)
            props.history.push("/friends")
        })
    }

    console.log(props);
    return(
        <form onSubmit={handleSubmit}>
            <input 
            name="username"
            type="text"
            id="username"
            value={value.username}
            placeholder="Username here..."
            onChange={handleChanges}
            />
            <input 
            name="password"
            type="password"
            id="password"
            value={value.password}
            placeholder="Password here..."
            onChange={handleChanges}
            />
            <button>Login</button>
        </form>
    )
}

export default Login;