import { ChatEngine } from 'react-chat-engine'

import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed'

import './App.css'

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />


    return (
        <ChatEngine
            height="100vh"
            projectID="9ba5b371-dc08-4e3b-a41c-7ba7b4a62f36
            "
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;