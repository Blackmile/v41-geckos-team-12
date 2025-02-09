import React, { useState } from 'react'
import { useAppContext } from '../../context'
import { Button } from '../Button'
import './styles.scss'

export default function MessageInput() {
  const [message, setMessage] = useState('')

  const { onSendMessage, user } = useAppContext()

  function handleOnClick() {
    onSendMessage({ message, username: user?.username })
    setMessage('')
  }

  return (
    <div className="input-container-msg">
      <input
        className="input-msg"
        type="text"
        placeholder="Type here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        autoFocus
      />
      <Button variant="filled" onClick={handleOnClick}>
        Send
      </Button>
    </div>
  )
}
