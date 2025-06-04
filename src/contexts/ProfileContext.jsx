import { createContext, useContext, useState } from "react";
import profilepic from '../assets/profile.jpeg'

const ProfileContext = createContext();
export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState({ name: "ANU", email: "Anu.grah@xyz.com", image: profilepic })

    return (
        <ProfileContext.Provider value={{ profile }}>
            {children}
        </ProfileContext.Provider>
    )
}