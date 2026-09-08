import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header<{ $variant: 'home' | 'restaurant' }>`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 40px 0;
  text-align: center;

  .container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    padding: 24px 0;

    .container {
      flex-direction: ${({ $variant }) => ($variant === 'restaurant' ? 'column' : 'row')};
      gap: 16px;
      flex-wrap: wrap;
    }
  }
`

export const Logo = styled(Link)`
  display: inline-flex;
`

export const LogoImage = styled.img`
  width: 132px;
  height: auto;
  display: block;
  object-fit: contain;
`

export const Nav = styled.nav`
  a {
    font-size: 18px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const CartButton = styled.button`
  background: transparent;
  font-size: 18px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
`

export const Spacer = styled.div`
  min-width: 160px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const AuthArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 160px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    min-width: auto;
  }
`

export const UserName = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  white-space: nowrap;
`

export const AuthButton = styled.button`
  background: transparent;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  padding: 4px 0;
  text-decoration: underline;
`

export const LogoutButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 12px;
  font-weight: 700;
  padding: 6px 12px;
`
