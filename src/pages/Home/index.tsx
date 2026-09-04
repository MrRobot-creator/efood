import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import RestaurantCard from '../../components/RestaurantCard'
import Footer from '../../components/Footer'
import { fetchRestaurants } from '../../services/api'
import { Restaurant } from '../../types'
import { List, Container, Message } from './styles'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

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
        setError('Não foi possível carregar os restaurantes. Tente novamente.')
      })
      .finally(() => {
        if (isActive) setIsLoading(false)
      })

    return () => {
      isActive = false
      controller.abort()
    }
  }, [])

  return (
    <>
      <Header variant="home" />
      <Banner />
      <Container>
        {isLoading && <Message>Carregando restaurantes...</Message>}
        {error && <Message role="alert">{error}</Message>}
        {!isLoading && !error && (
          <List>
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </List>
        )}
      </Container>
      <Footer />
    </>
  )
}

export default Home
