import { CartItem } from '../../types'
import { DELIVERY_FEE } from './types'
import { formatPrice } from './utils'
import {
  Title,
  Items,
  Item,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemPrice,
  RemoveButton,
  Total,
  Button,
  Empty,
  FeeRow
} from './styles'

type Props = {
  items: CartItem[]
  onRemove: (id: number) => void
  onContinue: () => void
}

const CartItems = ({ items, onRemove, onContinue }: Props) => {
  const productsTotal = items.reduce((acc, item) => acc + item.preco * item.quantity, 0)
  const total = productsTotal + (items.length > 0 ? DELIVERY_FEE : 0)

  return (
    <>
      <Title>Carrinho</Title>
      {items.length === 0 ? (
        <Empty>O carrinho está vazio</Empty>
      ) : (
        <>
          <Items>
            {items.map((item) => (
              <Item key={item.id}>
                <ItemImage src={item.foto} alt={item.nome} />
                <ItemInfo>
                  <ItemName>{item.nome}</ItemName>
                  <ItemPrice>{formatPrice(item.preco)}</ItemPrice>
                </ItemInfo>
                <RemoveButton
                  type="button"
                  onClick={() => onRemove(item.id)}
                  aria-label="Remover"
                >
                  🗑️
                </RemoveButton>
              </Item>
            ))}
          </Items>
          <FeeRow>
            <span>Taxa de entrega</span>
            <span>{formatPrice(DELIVERY_FEE)}</span>
          </FeeRow>
          <Total>
            <span>Valor total</span>
            <span>{formatPrice(total)}</span>
          </Total>
          <Button type="button" onClick={onContinue}>
            Continuar com a entrega
          </Button>
        </>
      )}
    </>
  )
}

export default CartItems
