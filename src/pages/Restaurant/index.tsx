import { useEffect, useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MenuItem from '../../components/MenuItem'
import Modal from '../../components/Modal'
import Cart from '../../components/Cart'
import { useAuth } from '../../contexts/AuthContext'
import { fetchRestaurants } from '../../services/api'
import { MenuItem as MenuItemType, CartItem, Restaurant } from '../../types'
import {
  Banner,
  BannerContent,
  Category,
  Title,
  Container,
  MenuList,
  Message
} from './styles'

const RestaurantPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const controller = new AbortController()
    let isActive = true

    fetchRestaurants(controller.signal)
      .then((data) => {
        if (isActive) setRestaurants(data)
      })
      .catch(() => {
        if (!isActive || controller.signal.aborted) {
          return
        }
        setError('Não foi possível carregar o restaurante. Tente novamente.')
      })
      .finally(() => {
        if (isActive) setIsLoading(false)
      })

    return () => {
      isActive = false
      controller.abort()
    }
  }, [])

  const restaurant = restaurants.find((r) => r.id === Number(id))

  if (isLoading) {
    return <Message>Carregando restaurante...</Message>
  }

  if (error) {
    return <Message role="alert">{error}</Message>
  }

  if (!restaurant) {
    return <Navigate to="/" replace />
  }

  const handleOpenModal = (item: MenuItemType) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleAddToCart = (item: MenuItemType) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === item.id)
      if (exists) {
        return prev
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const handleRemoveFromCart = (itemId: number) => {
    setCartItems((prev) => prev.filter((i) => i.id !== itemId))
  }

  const handleOrderComplete = () => {
    setCartItems([])
  }

  return (
    <>
      <Header
        variant="restaurant"
        cartCount={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />
      <Banner $image={restaurant.capa}>
        <BannerContent>
          <Category>{restaurant.tipo}</Category>
          <Title>{restaurant.titulo}</Title>
        </BannerContent>
      </Banner>
      <Container>
        <MenuList>
          {restaurant.cardapio.map((item) => (
            <MenuItem key={item.id} item={item} onClick={() => handleOpenModal(item)} />
          ))}
        </MenuList>
      </Container>
      <Footer />
      <Modal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleAddToCart}
      />
      <Cart
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onRemove={handleRemoveFromCart}
        onOrderComplete={handleOrderComplete}
        requireAuth
        isAuthenticated={isAuthenticated}
        onRequireLogin={() => {
          setIsCartOpen(false)
          navigate('/login')
        }}
      />
    </>
  )
}

export default RestaurantPage
