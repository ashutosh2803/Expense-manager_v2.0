import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';

const HistoryItem = ({id, title, amount, handleDelete}) => {
    return (
        <Card key={id}>
            <Card.Body className='d-flex justify-content-between align-items-center border-right-5 border-success'>
                
                <Card.Title><Button className='btn btn-light h1' onClick={(id) => handleDelete(id)}><MdDelete/></Button>     {title}</Card.Title>
                <Card.Title>{amount > 0 ? "+" : "-"} &#8377; {amount}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default HistoryItem;
