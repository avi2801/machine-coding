import AppStore from '@/context/UserContext';
import React, { useContext } from 'react'

const Profile = () => {
    const {user} = useContext(AppStore);
   
    return (
       <div>
        {user.userName}
       </div>
    )
}

export default Profile;
