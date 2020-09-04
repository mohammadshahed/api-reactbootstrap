import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    }, []);
    return (
        // <div>
        //     <p>This is Friend Details: {friendId}</p>
        //     <h3>{friend.name}</h3>
        //     <p>email: {friend.email}</p>
        //     <p>phone: {friend.phone}</p>
        //     <p>website: {friend.website}</p>
        // </div>
        
        <div className="card" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
            
            <Card className="bg-secondary" border="primary" style={{ width: '25rem' }}>
                <Card.Body>
                    <Card.Title>Friend Details Here: {friendId}</Card.Title>
                    <Card.Text>
                        <h3>{friend.name}</h3>
                    </Card.Text>
                    <Card.Text>
                        <p>email: {friend.email}</p>
                    </Card.Text>
                    <Card.Text>
                        <p>phone: {friend.phone}</p>
                    </Card.Text>
                    <Card.Text>
                        <p>website: {friend.website}</p>
                    </Card.Text>
                    <Button onClick={() => alert("hello")} variant="warning">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
          
    );
};

export default FriendDetail;