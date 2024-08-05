import React, { useContext } from 'react'
import { ChatState } from '../contexts/chat-state-context'

const ConversationChat = () => {
    const {activeConversation} = useContext(ChatState)
  return (
    <div></div>
  )
}

export default ConversationChat