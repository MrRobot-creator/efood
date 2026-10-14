import { FormEvent, ChangeEvent } from 'react'
import { PaymentData } from './types'
import { formatPrice, maskCard, onlyDigits } from './utils'
import { Title, Form, Field, Row, Button, ErrorText } from './styles'

type Props = {
  payment: PaymentData
  total: number
  error: string
  isSubmitting: boolean
  onChange: (field: keyof PaymentData, value: string) => void
  onSubmit: (e: FormEvent) => void
  onBack: () => void
}

const PaymentForm = ({
  payment,
  total,
  error,
  isSubmitting,
  onChange,
  onSubmit,
  onBack
}: Props) => {
  const handle =
    (field: keyof PaymentData, transform?: (v: string) => string) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = transform ? transform(e.target.value) : e.target.value
      onChange(field, value)
    }

  return (
    <>
      <Title>Pagamento - Valor a pagar {formatPrice(total)}</Title>
      {error && <ErrorText>{error}</ErrorText>}
      <Form onSubmit={onSubmit}>
        <Field>
          <label htmlFor="cardName">Nome no cartão</label>
          <input
            id="cardName"
            value={payment.cardName}
            onChange={handle('cardName')}
            required
          />
        </Field>
        <Field>
          <label htmlFor="cardNumber">Número do cartão</label>
          <input
            id="cardNumber"
            value={payment.cardNumber}
            onChange={handle('cardNumber', maskCard)}
            placeholder="0000 0000 0000 0000"
            required
          />
        </Field>
        <Row>
          <Field>
            <label htmlFor="cvv">CVV</label>
            <input
              id="cvv"
              value={payment.cvv}
              onChange={handle('cvv', (v) => onlyDigits(v).slice(0, 3))}
              required
            />
          </Field>
          <Field>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <input
              id="expiresMonth"
              value={payment.expiresMonth}
              onChange={handle('expiresMonth', (v) => onlyDigits(v).slice(0, 2))}
              placeholder="MM"
              required
            />
          </Field>
        </Row>
        <Field>
          <label htmlFor="expiresYear">Ano de vencimento</label>
          <input
            id="expiresYear"
            value={payment.expiresYear}
            onChange={handle('expiresYear', (v) => onlyDigits(v).slice(0, 4))}
            placeholder="AAAA"
            required
          />
        </Field>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando pedido...' : 'Finalizar pagamento'}
        </Button>
        <Button type="button" onClick={onBack} disabled={isSubmitting}>
          Voltar para a edição de endereço
        </Button>
      </Form>
    </>
  )
}

export default PaymentForm
