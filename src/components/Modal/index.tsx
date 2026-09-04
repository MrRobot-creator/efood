import { useEffect } from 'react'
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
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen || !item) return null

  const formatPrice = (price: number) =>
    price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return (
    <Overlay onClick={onClose}>
      <ModalContainer
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <CloseButton type="button" aria-label="Fechar detalhes do produto" onClick={onClose}>
          ×
        </CloseButton>
        <Content>
          <Image src={item.foto} alt={item.nome} />
          <Info>
            <Title id="product-modal-title">{item.nome}</Title>
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