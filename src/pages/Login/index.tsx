import { FormEvent, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useAuth } from '../../contexts/AuthContext'
import {
  Page,
  Main,
  Card,
  Title,
  Subtitle,
  Form,
  Field,
  ErrorMsg,
  SubmitButton,
  FooterText,
  StyledLink
} from './styles'

const Login = () => {
  const { login, isAuthenticated, isLoading } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (isLoading) return null
  if (isAuthenticated) return <Navigate to="/" replace />

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    const result = await login({ email, password })
    setSubmitting(false)

    if (result.success) {
      navigate('/')
    } else {
      setError(result.error || 'Erro ao entrar.')
    }
  }

  return (
    <Page>
      <Header variant="home" />
      <Main>
        <Card>
          <Title>Entrar</Title>
          <Subtitle>Acesse sua conta e faça seus pedidos</Subtitle>
          <Form onSubmit={handleSubmit}>
            {error && <ErrorMsg>{error}</ErrorMsg>}
            <Field>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </Field>
            <Field>
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                minLength={6}
              />
            </Field>
            <SubmitButton type="submit" disabled={submitting}>
              {submitting ? 'Entrando...' : 'Entrar'}
            </SubmitButton>
          </Form>
          <FooterText>
            Não tem conta?{' '}
            <StyledLink to="/register">Cadastre-se</StyledLink>
          </FooterText>
        </Card>
      </Main>
      <Footer />
    </Page>
  )
}

export default Login
