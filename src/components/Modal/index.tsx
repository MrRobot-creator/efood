import { MenuItem } from '../../types'
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Content,
  Image,
  Info,
  Title,
  Description,
  Portion,
  Button
} from './styles'

type Props = {
  item: MenuItem | null
  isOpen: boolean
  onClose: () => void
  onAddToCart: (item: MenuItem) => void
}

const Modal = ({ item, isOpen, onClose, onAddToCart }: Props) => {
  if (!isOpen || !item) return null

  const formatPrice = (price: number) =>
    price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <CloseButton type="button" onClick={onClose}>
          ×
        </CloseButton>
        <Content>
          <Image src={item.foto} alt={item.nome} />
          <Info>
            <Title>{item.nome}</Title>
            <Description>{item.descricao}</Description>
            <Portion>Serve: {item.porcao}</Portion>
            <Button
              type="button"
              onClick={() => {
                onAddToCart(item)
                onClose()
              }}
            >
              Adicionar ao carrinho - {formatPrice(item.preco)}
            </Button>
          </Info>
        </Content>
      </ModalContainer>
    </Overlay>
  )
}

export default Modal
