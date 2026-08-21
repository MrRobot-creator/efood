import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import {
  HeaderContainer,
  Logo,
  Nav,
  CartButton,
  AuthArea,
  UserName,
  AuthButton,
  LogoutButton,
  Spacer
} from './styles'

type HeaderProps = {
  cartCount?: number
  onCartClick?: () => void
  variant?: 'home' | 'restaurant'
}

const Header = ({ cartCount = 0, onCartClick, variant = 'home' }: HeaderProps) => {
  const { user, isAuthenticated, logout } = useAuth()

  return (
    <HeaderContainer $variant={variant}>
      <div className="container">
        {variant === 'restaurant' ? (
          <Nav>
            <Link to="/">Restaurantes</Link>
          </Nav>
        ) : (
          <Spacer />
        )}

        <Logo to="/">
          <h1>efood</h1>
        </Logo>

        {variant === 'restaurant' ? (
          <CartButton type="button" onClick={onCartClick}>
            {cartCount} produto(s) no carrinho
          </CartButton>
        ) : (
          <AuthArea>
            {isAuthenticated ? (
              <>
                <UserName>Olá, {user?.name.split(' ')[0]}</UserName>
                <LogoutButton type="button" onClick={logout}>
                  Sair
                </LogoutButton>
              </>
            ) : (
              <>
                <AuthButton as={Link} to="/login">
                  Entrar
                </AuthButton>
                <AuthButton as={Link} to="/register">
                  Cadastrar
                </AuthButton>
              </>
            )}
          </AuthArea>
        )}
      </div>
    </HeaderContainer>
  )
}

export default Header
