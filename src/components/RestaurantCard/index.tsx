import { Link } from 'react-router-dom'
import { Restaurant } from '../../types'
import {
  Card,
  ImageWrapper,
  Image,
  Infos,
  Tag,
  TitleRow,
  Title,
  Rating,
  Description,
  Button
} from './styles'

type Props = {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <Card>
      <ImageWrapper>
        <Image src={restaurant.capa} alt={restaurant.titulo} />
        <Infos>
          {restaurant.destacado && <Tag>Destaque da semana</Tag>}
          <Tag>{restaurant.tipo}</Tag>
        </Infos>
      </ImageWrapper>
      <TitleRow>
        <Title>{restaurant.titulo}</Title>
        <Rating>
          {restaurant.avaliacao.toFixed(1)} <span>★</span>
        </Rating>
      </TitleRow>
      <Description>{restaurant.descricao}</Description>
      <Button as={Link} to={`/restaurant/${restaurant.id}`}>
        Saiba mais
      </Button>
    </Card>
  )
}

export default RestaurantCard
