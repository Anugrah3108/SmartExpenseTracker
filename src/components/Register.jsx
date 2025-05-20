import React, { useState } from 'react'

function Register() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setpassword] = useState('');
    const [age, setAge] = useState('');
    const [monthlyIncome, setMonthlyIncome] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Registering:');
    }
    return (
        <form className='space-y-2'>
            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200' />
            <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200' />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200' />
            <input type="number" placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200' />
            <input type="number" placeholder='Monthly Income' value={monthlyIncome} onChange={(e) => setMonthlyIncome(e.target.value)} className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200' />
            <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition cursor-pointer'>Register</button>
        </form>
    )
}

export default Register
