import { useState, createContext } from 'react'
import { getCookie } from '../util/Authentication'

type SessionContextProps = {
    sessionObject: string
    setSessionObject: (cookieValue: string) => void
}

const SessionContext = createContext<SessionContextProps>({
    sessionObject: '',
    setSessionObject: () => {},
})

type SessionProviderProps = {
    children: React.ReactNode
}

const SessionProvider = ({ children }: SessionProviderProps) => {
    const [sessionObject, setSessionObject] = useState(getCookie(''))

    const sessionCtx = {
        sessionObject,
        setSessionObject,
    }

    return (
        <SessionContext.Provider value={sessionCtx}>
            {children}
        </SessionContext.Provider>
    )
}

export { SessionContext as sessionContext }

export default SessionProvider
