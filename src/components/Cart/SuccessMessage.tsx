import { Title, SuccessText, OrderId, Button } from './styles'

type Props = {
  orderId: string
  onFinish: () => void
}

const SuccessMessage = ({ orderId, onFinish }: Props) => (
  <>
    <Title>Pedido realizado - {orderId}</Title>
    <OrderId>Número do pedido: {orderId}</OrderId>
    <SuccessText>
      Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve,
      será entregue no endereço fornecido.
      <br />
      <br />
      Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças
      extras.
      <br />
      <br />
      Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim
      sua segurança e bem-estar durante a refeição.
      <br />
      <br />
      Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
    </SuccessText>
    <Button type="button" onClick={onFinish}>
      Concluir
    </Button>
  </>
)

export default SuccessMessage
