import React, { useContext } from 'react'
import { useProfile } from '../contexts/ProfileContext'

function Profile() {
    const { profile } = useProfile();
    return (
        <div className="bg-white p-6 rounded-xl shadow text-center">
            <img src={profile.image} alt="Profile" className="w-20 h-20 rounded-full mx-auto mb-3" />
            <p className="font-bold text-lg">{profile.name}</p>
            <p className="text-gray-500 text-sm">{profile.email}</p>
        </div>
    );
};

export default Profile
