import React, { useState } from "react";

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        activity: '',
        dateTime: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Here you can handle the form data, like sending it to a server
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            
            <label>
                Activity:
                <input type="text" name="activity" onChange={handleChange} />
            </label>
            <label>
                Date and Time:
                <input type="datetime-local" name="dateTime" onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Register;