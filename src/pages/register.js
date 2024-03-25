import React, { useState } from "react";
import { Form, Input, Button, DatePicker } from 'antd';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
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
        <Form onSubmit={handleSubmit} layout="vertical">
            <h1>Register</h1>
            
            <Form.Item label="Username" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input type="text" name="username" onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Activity" rules={[{ required: true, message: 'Please input your activity!' }]}>
                <Input type="text" name="activity" onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Date and Time" rules={[{ required: true, message: 'Please input your date and time!' }]}>
                <DatePicker showTime onChange={(date, dateString) => setFormData({...formData, dateTime: dateString})} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Register</Button>
            </Form.Item>
        </Form>
    );
}

export default Register;