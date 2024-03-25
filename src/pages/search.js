import React, { useState } from "react";
import { Button, Flex, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchTerm);
        // Here you can handle the search term, like sending it to a server
    }

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px'
    };

    const inputStyle = {
        margin: '10px 0',
        padding: '10px',
        width: '200px'
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <h1>Search</h1>
            <label>
                Search Term:
                <input type="text" value={searchTerm} onChange={handleChange} style={inputStyle} />
            </label>
            <Button shape="circle" icon={<SearchOutlined />} />
        </form>
    );
}

export default Search;