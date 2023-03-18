import React, { useState } from 'react'
import { useEffect } from 'react';
import AddNewTransaction from './AddNewTransaction';
import Header from './Header';
import History from './History';

const ExpenseManager = () => {
    const [expenses, setExpenses] = useState(0);
    const [income, setIncome] = useState(0);
    const [data, setData] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem('ledger');
        const initialValue = JSON.parse(saved);
        return initialValue || [];
      });

    useEffect(() => {
        localStorage.setItem('ledger', JSON.stringify(data));
    }, [data]);

    const handleIncome = value => setIncome(value + income);
    const handleExpense = value => setExpenses(value + expenses);
    const handleData = payload => setData([...data, payload]);
    const handleDeleteAll = () => {
        setData([]);
        setExpenses(0);
        setIncome(0);
    }
    const handleDelete = id => {
        let item = data?.filter((item) => item.id === id);
        
        let amount = Number(item[0].updated_amount);

        if (item[0].type === "income") {
            handleIncome(-amount);
        } else{
            handleExpense(-amount);
        }
        setData(data?.filter((item) => item.id !== id));
    }
    const newData = { expenses, income, data };

    return (
        <div className='container w-100 m-auto border border-secondary py-5 bg-light min-vw-50'>
            <Header {...newData} />
            <History {...newData} handleDelete={handleDelete} handleDeleteAll={handleDeleteAll} />
            <AddNewTransaction {...newData} handleData={handleData} handleExpense={handleExpense} handleIncome={handleIncome} />
        </div>
    )
}

export default ExpenseManager;
