import React from 'react'
import { Service } from './Services/Service'
import style from "../../styles/servicestyle/serviceOne.module.css";


export const Services = () => {
  return (
    <div className={style['content-all-services']}><Service /></div>
  )
}
