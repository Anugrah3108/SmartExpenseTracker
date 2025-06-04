import React from 'react'
import { useTransactions } from '../contexts/TranscationContext';

function TransactionList() {
    const { transactions } = useTransactions();

    return (
        <div className="bg-white p-6 rounded shadow max-w-xl mx-3.5">
            <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-lg">Transaction List</span>
                <div className="space-x-2">
                    <select className="border p-2 rounded text-sm">
                        <option value="all">All</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                    <button className="bg-gray-100 border px-3 py-1 rounded text-sm">Sort</button>
                </div>
            </div>
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="text-left">
                        <th className="border-b">Title</th>
                        <th className="border-b">Amount</th>
                        <th className="border-b">Date</th>
                        <th className="border-b">Category</th>
                        <th className="border-b">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((t, i) => (
                        <tr key={i} className="border-t hover:bg-gray-50">
                            <td>{t.title}</td>
                            <td className={t.type === 'Expense' ? 'text-red-600' : 'text-green-600'}>
                                {t.type === 'Expense' ? '-' : ''}${Number(t.amount).toFixed(2)}
                            </td>
                            <td>{t.date}</td>
                            <td>{t.category}</td>
                            <td>✏️</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionList
