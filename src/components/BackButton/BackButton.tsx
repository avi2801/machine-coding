import React from 'react'
import { checkIfLocal } from '../../utility/checkIfLocal';
import styles from '../../pages/counter/style.module.css'

const BackButton = () => {
   
    const goToHomeHandler = () => {
       window.location.href ='/machine-coding'
      };
  return (
    <button className={styles.counterButtons} onClick={goToHomeHandler} style={{width:'100px',borderRadius:'6px'}}>Home</button>
  )
}

export default BackButton