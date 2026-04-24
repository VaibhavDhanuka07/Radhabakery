import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { UserRole } from '../data/siteData'

const STORAGE_KEY = 'radha-cooking-demo-user'

export interface DemoUser {
  name: string
  email: string
  role: UserRole
}

interface AuthContextValue {
  user: DemoUser | null
  login: (payload: DemoUser) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

function readStoredUser() {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value ? (JSON.parse(value) as DemoUser) : null
  } catch {
    return null
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<DemoUser | null>(() => readStoredUser())

  useEffect(() => {
    if (!user) {
      window.localStorage.removeItem(STORAGE_KEY)
      return
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
  }, [user])

  return (
    <AuthContext.Provider
      value={{
        user,
        login: (payload) => setUser(payload),
        logout: () => setUser(null),
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used inside an AuthProvider')
  }

  return context
}
