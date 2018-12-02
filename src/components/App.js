import React from 'react'
import ProfileHeader from './ProfileHeader'
import ContactsPanel from './ContactsPanel'
import CreateChatFooter from './CreateChatFooter'
import RoomHeader from './RoomHeader'
import ChatPanel from './ChatPanel'
import MessageFooter from './MessageFooter'
import { style } from './index.module.css'

const MainPage = () => (
  <main>
    <aside>
      <ProfileHeader />
      <ContactsPanel />
    </aside>
    <section>
      <RoomHeader />
      <ChatPanel />
    </section>
  </main>
)

class App extends React.Component {
  render() {
    return <MainPage />
  }
}

export default App;
