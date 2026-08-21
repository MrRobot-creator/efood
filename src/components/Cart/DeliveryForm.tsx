import { FormEvent, ChangeEvent } from 'react'
import { DeliveryData } from './types'
import { maskZip } from './utils'
import { Title, Form, Field, Row, Button, ErrorText } from './styles'

type Props = {
  delivery: DeliveryData
  error: string
  onChange: (field: keyof DeliveryData, value: string) => void
  onSubmit: (e: FormEvent) => void
  onBack: () => void
}

const DeliveryForm = ({ delivery, error, onChange, onSubmit, onBack }: Props) => {
  const handle =
    (field: keyof DeliveryData, mask?: (v: string) => string) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = mask ? mask(e.target.value) : e.target.value
      onChange(field, value)
    }

  return (
    <>
      <Title>Entrega</Title>
      {error && <ErrorText>{error}</ErrorText>}
      <Form onSubmit={onSubmit}>
        <Field>
          <label htmlFor="receiver">Quem irá receber</label>
          <input
            id="receiver"
            value={delivery.receiver}
            onChange={handle('receiver')}
            required
          />
        </Field>
        <Field>
          <label htmlFor="address">Endereço</label>
          <input
            id="address"
            value={delivery.address}
            onChange={handle('address')}
            required
          />
        </Field>
        <Field>
          <label htmlFor="city">Cidade</label>
          <input id="city" value={delivery.city} onChange={handle('city')} required />
        </Field>
        <Row>
          <Field>
            <label htmlFor="zipCode">CEP</label>
            <input
              id="zipCode"
              value={delivery.zipCode}
              onChange={handle('zipCode', maskZip)}
              placeholder="00000-000"
              required
            />
          </Field>
          <Field>
            <label htmlFor="number">Número</label>
            <input
              id="number"
              value={delivery.number}
              onChange={handle('number')}
              required
            />
          </Field>
        </Row>
        <Field>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            id="complement"
            value={delivery.complement}
            onChange={handle('complement')}
          />
        </Field>
        <Button type="submit">Continuar com o pagamento</Button>
        <Button type="button" onClick={onBack}>
          Voltar para o carrinho
        </Button>
      </Form>
    </>
  )
}

export default DeliveryForm
