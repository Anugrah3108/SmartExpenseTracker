import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <div className="max-w-sm mx-auto mt-20 p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{isLogin ? "Log In" : "Register"}</h2>

            <div className="flex mb-6 bg-gray-100 rounded-lg overflow-hidden">
                <button
                    className={`flex-1 py-2 text-sm font-medium ${isLogin ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500'
                        }`}
                    onClick={() => setIsLogin(true)}
                >
                    Log In
                </button>
                <button
                    className={`flex-1 py-2 text-sm font-medium ${!isLogin ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500'
                        }`}
                    onClick={() => setIsLogin(false)}
                >
                    Register
                </button>
            </div>

            {isLogin ? <Login /> : <Register />}
        </div>
    )
}

export default AuthForm
