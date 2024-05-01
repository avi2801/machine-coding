import AppStore from '@/context/UserContext';
import React, { useContext } from 'react'
import styles from './style.module.css'

const Profile = () => {
    const {user, setUser} = useContext(AppStore);
    const resetUser = () =>{
        setUser({})
    }
   
    return (
       <div className={styles.mainContainer}>
        {user.userName}
        <button className={styles.buttonClass} style={{background:'red', color:'white'}} onClick={resetUser}>Reset the User Name</button>
       </div>
    )
}

export default Profile;
