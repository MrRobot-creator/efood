import { MenuItem as MenuItemType } from '../../types'
import { Card, Image, Title, Description, Button } from './styles'

type Props = {
  item: MenuItemType
  onClick: () => void
}

const MenuItem = ({ item, onClick }: Props) => {
  return (
    <Card>
      <Image src={item.foto} alt={item.nome} />
      <Title>{item.nome}</Title>
      <Description>{item.descricao}</Description>
      <Button type="button" onClick={onClick}>
        Mais detalhes
      </Button>
    </Card>
  )
}

export default MenuItem
