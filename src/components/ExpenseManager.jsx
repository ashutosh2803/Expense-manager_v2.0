import React, { useState } from 'react'
import AddNewTransaction from './AddNewTransaction';
import Header from './Header';
import History from './History';

const ExpenseManager = () => {
    const [expenses, setExpenses] = useState(0);
    const [income, setIncome] = useState(0);
    const [data, setData] = useState([]);

    const handleIncome = value => setIncome(value + income);
    const handleExpense = value => setExpenses(value + expenses);
    const handleData = payload => setData([...data, payload]);
    const handleDelete = id => {
        let item = data?.filter((item) => item.id === id);
        if (item.amount > 0) {
            handleIncome(-Number(item.amount));
        } else {
            handleExpense(+Number(item.amount));
        }
        setData(data?.filter((item) => item.id !== id));
    }
    const newData = { expenses, income, data };

    return (
        <div className='container w-50 m-auto border border-secondary py-5 bg-light'>
            <Header {...newData} />
            <History {...newData} handleDelete={handleDelete} />
            <AddNewTransaction {...newData} handleData={handleData} handleExpense={handleExpense} handleIncome={handleIncome} />
        </div>
    )
}

export default ExpenseManager;
