import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';

const HistoryItem = ({ id, title, updated_amount, type, handleDelete }) => {
    let card_style = type === "income" ? "#25D366" : "#fc3c44";
    // let date_style = updated_amount < 1000 ? { paddingRight: '7%' } : {};
    return (
        <Card key={id} style={{backgroundColor: card_style}} className='my-2'>
            <Card.Body className='d-flex justify-content-between align-items-center border-success'>
                <Card.Title className='my-0.5'><Button className='btn btn-light rounded-circle fs-4 py-1' value={id} onClick={() => handleDelete(id)}><MdDelete /></Button> {title}</Card.Title>
                {/* <Card.Title className='my-1 mx-1' style={date_style}>{full_date}</Card.Title> */}
                <Card.Title className='fs-2'>&#8377; {type === "income" ? "+" : "-"}{updated_amount}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default HistoryItem;
