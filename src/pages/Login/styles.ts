import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
`

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  max-width: 420px;
  width: 100%;
  padding: 32px 24px;
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
  text-align: center;
`

export const Subtitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
  text-align: center;
  opacity: 0.9;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  input {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: 10px 12px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.dark};
    background: ${({ theme }) => theme.colors.background};
    outline: none;

    &:focus {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.secondary};
    }

    &::placeholder {
      color: #999;
    }
  }
`

export const ErrorMsg = styled.p`
  font-size: 13px;
  color: #c0392b;
  background: #fdecea;
  padding: 8px 12px;
  border-radius: 4px;
`

export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 14px;
  font-weight: 700;
  padding: 12px;
  margin-top: 8px;
  width: 100%;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const FooterText = styled.p`
  margin-top: 24px;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};

  a {
    font-weight: 700;
    text-decoration: underline;
  }
`

export const StyledLink = styled(Link)``
