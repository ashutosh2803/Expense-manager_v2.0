import React from 'react'
import { Card } from 'react-bootstrap';

const Header = ({ expenses, income }) => {
    let balance = income - expenses;
    return (
        <div>
            <div style={{letterSpacing: '0.2ch'}} className='display-4 fw-bolder'>Expense Tracker</div>
            <br/>
            <div>
                <div className='display-6'>YOUR BALANCE</div>
                <div className='display-6 fw-bold'>&#8377; {income - expenses > 0 ? "+" : income - expenses < 0 ? "" : ""}{(balance)}</div>
            </div>
            <br/>
            <div className='d-flex text-black'>
                <Card>
                    <Card.Body>
                        <Card.Title style={{letterSpacing: '0.2ch'}}>INCOME</Card.Title>
                        <Card.Text className='fw-bold h5'>{income}</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mx-2'>
                    <Card.Body>
                        <Card.Title style={{letterSpacing: '0.2ch'}}>EXPENSE</Card.Title>
                        <Card.Text className='fw-bold h5'>{Math.abs(expenses)}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <br/>
        </div>
    )
}

export default Header;
