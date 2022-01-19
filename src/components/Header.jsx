import React from 'react'
import { Card } from 'react-bootstrap';

const Header = ({expenses, income}) => {
    return (
        <div>
            <div className='display-4 font-weight-bolder'>Expense Tracker</div>
            <br/>
            <div>
                <div className='display-6 font-weight-400'>YOUR BALANCE</div>
                <div className='display-6'>&#8377; {income + expenses > 0 ? "+" : income + expenses === 0 ? "" : "-"} {(income + expenses)}</div>
            </div>
            <br/>
            <div className='d-flex'>
                <Card>
                    <Card.Body>
                        <Card.Title>INCOME</Card.Title>
                        <Card.Text>{income}</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>EXPENSE</Card.Title>
                        <Card.Text>{expenses}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <br/>
        </div>
    )
}

export default Header;
