import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';

const HistoryItem = ({ id, title, updated_amount, type, handleDelete }) => {
    let card_classname = type === "income" ? "rounded-pill bg-success my-2" : "rounded-pill bg-danger";
    return (
        <Card key={id} className={card_classname}>
            <Card.Body className='d-flex justify-content-between align-items-center border-success'>
                <Card.Title className='my-1 mx-1'><Button className='btn btn-light rounded-circle fs-4 py-1' value={id} onClick={() => handleDelete(id)}><MdDelete/></Button> {title}</Card.Title>
                <Card.Title className='fs-2'>&#8377; {type === "income" ? "+" : ""}{updated_amount}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default HistoryItem;
