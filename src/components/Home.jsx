// import React from 'react'
import Profile from './Profile'
import { ProfileProvider } from '../contexts/ProfileContext'
import { TransactionProvider } from '../contexts/TranscationContext'
import AddTransaction from './AddTransaction'
import Summary from './Summary'
import TransactionList from './TransactionList'
import BudgetGoals from './BudgetGoals'
import ChatBot from './ChatBot'

function Home() {
    return (
        <TransactionProvider>
            <ProfileProvider>
                <div className="flex flex-col md:flex-row gap-2 px-6 py-6 bg-gray-100 min-h-screen">
                    <div className="w-full md:w-1/4">
                        <Summary />
                    </div>
                    <div className="w-full md:w-2/4 flex flex-col gap-4">
                        <AddTransaction />
                        <TransactionList />
                    </div>
                    <div className="w-full md:w-1/4 flex flex-col gap-4">
                        <Profile />
                        <BudgetGoals />
                        <ChatBot />
                    </div>
                </div>
            </ProfileProvider>
        </TransactionProvider>
    );
};


export default Home
