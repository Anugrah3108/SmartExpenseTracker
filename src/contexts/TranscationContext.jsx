import { createContext, useContext, useState } from "react";


const TranscationContext = createContext();
export const useTransactions = () => useContext(TranscationContext);

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([
        { title: 'xy', amount: '1000', date: '2025-05-22', category: 'cc', type: 'Income' },
        { title: 'yx', amount: '500', date: '2024-04-25', category: 'vv', type: 'Expense' },
    ]);

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    const value = {
        transactions,
        addTransaction,
    };

    return <TranscationContext.Provider value={value}>{children}</TranscationContext.Provider>
}