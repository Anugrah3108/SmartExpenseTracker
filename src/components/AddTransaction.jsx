import React, { useState } from 'react'
import { useTransactions } from '../contexts/TranscationContext';

function AddTransaction() {
    const { addTransaction } = useTransactions();
    const [form, setForm] = useState({ title: '', amount: '', date: '', category: '', type: 'Expense' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = () => {
        if (!form.title || !form.amount || !form.date) return;
        addTransaction(form);
        setForm({ title: '', amount: '', date: '', category: '', type: 'Expense' });
    };

    return (
        <div className="bg-white p-6 rounded shadow w-full max-w-xl mx-auto grid gap-3">
            <h2 className="font-bold text-lg">Add Transaction</h2>
            <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="border p-2 rounded" />
            <div className="grid grid-cols-2 gap-2">
                <input name="amount" value={form.amount} onChange={handleChange} placeholder="Amount" type="number" className="border p-2 rounded" />
                <input name="date" value={form.date} onChange={handleChange} type="date" className="border p-2 rounded" />
            </div>
            <div className="grid grid-cols-2 gap-2">
                <input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="border p-2 rounded" />
                <select name="type" value={form.type} onChange={handleChange} className="border p-2 rounded">
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>
            </div>
            <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold">Add</button>
        </div>
    );
};

export default AddTransaction
