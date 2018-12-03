import React from 'react'
import ProfileHeader from './ProfileHeader'
import ContactsPanel from './ContactsPanel'
import RoomHeader from './RoomHeader'
import ChatPanel from './ChatPanel'
import CreateMessageForm from './CreateMessage'
import CreateChatForm from './CreateChat'
import { style } from './index.module.css'

const App = () => (
  <main>
    <aside>
      <ProfileHeader />
      <ContactsPanel />
      <CreateChatForm />
    </aside>
    <section>
      <RoomHeader />
      <col->
        <ChatPanel />
        <CreateMessageForm />
      </col->
    </section>
  </main>
)

export default App;
