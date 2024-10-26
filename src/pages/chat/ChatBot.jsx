import React from 'react'
import style from '../../styles/chat/chat.module.css'
import { Chat } from '../../components/chat/Chat'


export const ChatBot = () => {
  return (
    <div className={style["content-chat"]} ><Chat/></div>
  )
}
