import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

const AddNewTransaction = ({handleData, handleIncome, handleExpense}) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            id: uuid(),
            title, 
            amount
        }
        if (Number(amount) > 0) {
            handleIncome(Number(amount));
        } else {
            handleExpense(Number(amount));
        }
        handleData(payload);
    }
    return (
        <div>
            <div className='font-weight-bold display-5'>Add New Transaction</div>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className='display-6'>Text</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Text..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAmount">
                    <Form.Label className='display-6'>Amount<br/> (Positive: Income,Nagative: Expenses)</Form.Label>
                    <Form.Control type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">ADD TRANSACTION</Button>
            </Form>
        </div>
    )
}

export default AddNewTransaction;
