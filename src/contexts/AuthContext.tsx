/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react'
import { User, AuthCredentials, RegisterData } from '../types'

type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (credentials: AuthCredentials) => Promise<{ success: boolean; error?: string }>
  register: (data: RegisterData) => Promise<{ success: boolean; error?: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const USERS_KEY = 'efood_users'
const SESSION_KEY = 'efood_session'

type StoredUser = User & { password: string }

function getStoredUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

function getSession(): User | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const session = getSession()
    if (session) {
      setUser(session)
    }
    setIsLoading(false)
  }, [])

  const login = async (credentials: AuthCredentials) => {
    const users = getStoredUsers()
    const found = users.find(
      (u) =>
        u.email.toLowerCase() === credentials.email.toLowerCase() &&
        u.password === credentials.password
    )

    if (!found) {
      return { success: false, error: 'E-mail ou senha inválidos.' }
    }

    const { password, ...safeUser } = found
    setUser(safeUser)
    localStorage.setItem(SESSION_KEY, JSON.stringify(safeUser))
    return { success: true }
  }

  const register = async (data: RegisterData) => {
    const users = getStoredUsers()
    const exists = users.some(
      (u) => u.email.toLowerCase() === data.email.toLowerCase()
    )

    if (exists) {
      return { success: false, error: 'Este e-mail já está cadastrado.' }
    }

    if (data.password.length < 6) {
      return { success: false, error: 'A senha deve ter no mínimo 6 caracteres.' }
    }

    if (!data.name.trim()) {
      return { success: false, error: 'Informe seu nome.' }
    }

    const newUser: StoredUser = {
      id: crypto.randomUUID(),
      name: data.name.trim(),
      email: data.email.toLowerCase().trim(),
      password: data.password
    }

    users.push(newUser)
    saveUsers(users)

    const { password, ...safeUser } = newUser
    setUser(safeUser)
    localStorage.setItem(SESSION_KEY, JSON.stringify(safeUser))
    return { success: true }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem(SESSION_KEY)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider')
  }
  return context
}
