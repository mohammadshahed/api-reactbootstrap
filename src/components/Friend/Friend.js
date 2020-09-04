import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Button } from 'react-bootstrap';

const Friend = (props) => {

    const { name, email, id} = props.friend;
    const friendStyle = { 
        border: '1px solid blue',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
        width: '90%',
    }

    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    return (
        <div style={{ display:"inline-block"}}>
            <div style={friendStyle}>
                <h2>Name: {name}</h2>
                <p>email: {email}</p>
                <Link to={`/friend/${id}`}>show detail of {id}</Link>
                <br/>
                <Button onClick={() => handleClick(id)} variant="warning">Click me</Button>
            </div>
        </div>
        
    );
};

export default Friend;