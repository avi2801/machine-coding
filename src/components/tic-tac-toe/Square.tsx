import React from 'react'
import styles from './style.module.css'

interface Props{
    value:string;
    onSquareClick:()=>void
}
const Square = ({value,onSquareClick}:Props) => {
    const {squareMainContainer} = styles

  return (
    <button className={squareMainContainer} onClick={onSquareClick}>{value}</button>
  )
}

export default Square