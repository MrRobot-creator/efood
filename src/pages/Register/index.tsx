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

const Register = () => {
  const { register, isAuthenticated, isLoading } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (isLoading) return null
  if (isAuthenticated) return <Navigate to="/" replace />

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.')
      return
    }

    setSubmitting(true)
    const result = await register({ name, email, password })
    setSubmitting(false)

    if (result.success) {
      navigate('/')
    } else {
      setError(result.error || 'Erro ao cadastrar.')
    }
  }

  return (
    <Page>
      <Header variant="home" />
      <Main>
        <Card>
          <Title>Criar conta</Title>
          <Subtitle>Cadastre-se para pedir seus pratos favoritos</Subtitle>
          <Form onSubmit={handleSubmit}>
            {error && <ErrorMsg>{error}</ErrorMsg>}
            <Field>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
            </Field>
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
                placeholder="Mínimo 6 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
                minLength={6}
              />
            </Field>
            <Field>
              <label htmlFor="confirmPassword">Confirmar senha</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Repita a senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                autoComplete="new-password"
                minLength={6}
              />
            </Field>
            <SubmitButton type="submit" disabled={submitting}>
              {submitting ? 'Cadastrando...' : 'Cadastrar'}
            </SubmitButton>
          </Form>
          <FooterText>
            Já tem conta? <StyledLink to="/login">Entrar</StyledLink>
          </FooterText>
        </Card>
      </Main>
      <Footer />
    </Page>
  )
}

export default Register
