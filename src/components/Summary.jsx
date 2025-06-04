import React from 'react'
import { useTransactions } from '../contexts/TranscationContext'

function Summary() {
    const { transactions } = useTransactions();
    const income = transactions.filter(t => t.type === 'Income').reduce((a, b) => a + Number(b.amount), 0);
    const expenses = transactions.filter(t => t.type === 'Expense').reduce((a, b) => a + Number(b.amount), 0);
    const balance = income - expenses;
    const savings = balance;

    return (
        <div className="grid gap-4 w-full max-w-xs mx-auto">
            <div className='bg-white p-4 rounded shadow'>
                <div className='font-semibold text-xl'>Monthly Income: </div>
                <div className=" text-green-700 font-semibold text-3xl">${income.toLocaleString()}</div>
            </div>
            <div className='bg-white p-4 rounded shadow'>
                <div className='font-semibold text-xl'>Monthly Expenses: </div>
                <div className=" text-red-700 font-semibold text-3xl">${expenses.toLocaleString()}</div>
            </div>
            <div className='bg-white p-4 rounded shadow'>
                <div className='font-semibold text-xl'>Total Expenses: </div>
                <div className=" text-green-700 font-semibold text-3xl">${expenses.toLocaleString()}</div>
            </div>
            <div className='bg-white p-4 rounded shadow'>
                <div className='font-semibold text-xl'>Savings: </div>
                <div className=" text-green-700 font-semibold text-3xl">${savings.toLocaleString()}</div>
            </div>
            <div className='bg-white p-4 rounded shadow'>
                <div className='font-semibold text-xl'>Current Balance: </div>
                <div className=" text-green-700 font-semibold text-3xl">${balance.toLocaleString()}</div>
            </div>
        </div>
    );
};

export default Summary
