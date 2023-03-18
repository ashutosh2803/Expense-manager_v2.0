import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

const AddNewTransaction = ({handleData, handleIncome, handleExpense}) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState();
    const [type, setType] = useState("");
    const calculateTimeStamp = () => {
        // Monday, October 30, 2021 - 12:17pm
        let date = new Date();
        let day = date.toLocaleString('en-US', { weekday: 'long' });
        let month = date.toLocaleString('en-US', { month: 'long' });
        let year = date.getFullYear();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let ampm = hour >= 12 ? 'pm' : 'am';
        hour = hour % 12;
        hour = hour ? hour : 12;
        minute = minute < 10 ? '0' + minute : minute;
        let seconds = date.getSeconds();
        let strTime = hour + ':' + minute + ':' + seconds + ' ' + ampm;
        let full_date = `${day}, ${month} ${date.getDate()}, ${year} - ${strTime}`;
        return full_date;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let updated_amount = amount;
        const full_date = calculateTimeStamp();
        const payload = {
            id: uuid(),
            title, 
            updated_amount,
            type,
            full_date
        }
        if (type === "income") {
            handleIncome(Number(updated_amount));
        }
        else if (type === "expense") {
            handleExpense(Number(updated_amount));
        }
        handleData(payload);
        setTitle("");
        setType("default");
        setAmount("Enter Amount...");
    }
    return (
        <div>
            <div className='font-weight-bold display-5'>Add New Transaction</div>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className='display-6'>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title..." />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className='display-6'>Amount Type</Form.Label>
                    <Form.Select value={type} onChange={e => setType(e.target.value)} id="amount_type">
                        <option key="default" value="default">select type</option>
                        <option key="income" value="income">Income</option>
                        <option key="expense" value="expense">Expense</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAmount">
                    <Form.Label className='display-6'>Amount</Form.Label>
                    <Form.Control type="number" placeholder='Enter Amount...' value={amount} onChange={(e) => setAmount(e.target.value)} />
                </Form.Group>
                <Button className='w-100 btn' variant="primary" type="submit">ADD TRANSACTION</Button>
            </Form>
        </div>
    )
}

export default AddNewTransaction;
