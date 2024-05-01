import React from 'react'
import { checkIfLocal } from '../../utility/checkIfLocal';
import styles from '../../pages/counter/style.module.css'

const BackButton = () => {
   
    const goToHomeHandler = () => {
       window.location.href = checkIfLocal(window.location.hostname)?'/':'/machine-coding'
      };
  return (
    <button className={styles.counterButtons} onClick={goToHomeHandler} style={{width:'100px'}}>Home</button>
  )
}

export default BackButton