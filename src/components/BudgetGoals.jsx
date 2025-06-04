import React from 'react'
import underconstruction from '../assets/construction.png'

function BudgetGoals() {
    return (
        <div className="bg-white p-6 rounded-xl shadow text-center">
            <img src={underconstruction} alt="underconstruction" className="w-20 h-20 mx-auto mb-3" />
            <p className="font-bold text-lg">BudgetGoals</p>
            <p className="text-gray-500 text-sm">Under Construction</p>
        </div>
    );
};

export default BudgetGoals
