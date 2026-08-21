import Header from '../../components/Header'
import Banner from '../../components/Banner'
import RestaurantCard from '../../components/RestaurantCard'
import Footer from '../../components/Footer'
import { restaurants } from '../../data/restaurants'
import { List, Container } from './styles'

const Home = () => {
  return (
    <>
      <Header variant="home" />
      <Banner />
      <Container>
        <List>
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </List>
      </Container>
      <Footer />
    </>
  )
}

export default Home
