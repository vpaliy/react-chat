import React from 'react'
import ProfileHeader from './ProfileHeader'
import ContactsPanel from './ContactsPanel'
import RoomHeader from './RoomHeader'
import ChatPanel from './ChatPanel'
import CreateMessageForm from './CreateMessage'
import CreateChatForm from './CreateChat'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import ForgotPasswordForm from './ForgotPasswordForm'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { style } from './index.module.css'

const AuthPage = () => (
  <Switch>
    <Route exact path="/" component={LoginForm}/>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/register" component={RegisterForm} />
    <Route exact path="/forgot" component={ForgotPasswordForm} />
 </Switch>
)

const MainPage = () => (
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

const App = ({ token }) => (
  token ? <MainPage /> : <AuthPage />
)

const mapStateToProps = state => ({
  token: state.auth.token
})

export default connect(
  mapStateToProps
)(App)
