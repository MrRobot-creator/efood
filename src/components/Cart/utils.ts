import { DeliveryData, PaymentData } from './types'

export const formatPrice = (price: number) =>
  price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export const onlyDigits = (value: string) => value.replace(/\D/g, '')

export const maskZip = (value: string) => {
  const digits = onlyDigits(value).slice(0, 8)
  if (digits.length <= 5) return digits
  return `${digits.slice(0, 5)}-${digits.slice(5)}`
}

export const maskCard = (value: string) => {
  const digits = onlyDigits(value).slice(0, 16)
  return digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim()
}

export const validateDelivery = (delivery: DeliveryData): string => {
  if (!delivery.receiver.trim()) return 'Informe quem irá receber.'
  if (!delivery.address.trim()) return 'Informe o endereço.'
  if (!delivery.city.trim()) return 'Informe a cidade.'
  if (onlyDigits(delivery.zipCode).length !== 8) return 'CEP inválido.'
  if (!delivery.number.trim()) return 'Informe o número.'
  return ''
}

export const validatePayment = (payment: PaymentData): string => {
  if (!payment.cardName.trim()) return 'Informe o nome no cartão.'
  if (onlyDigits(payment.cardNumber).length < 13) return 'Número do cartão inválido.'
  if (onlyDigits(payment.cvv).length < 3) return 'CVV inválido.'
  const month = Number(payment.expiresMonth)
  if (!payment.expiresMonth || month < 1 || month > 12) return 'Mês de vencimento inválido.'
  if (!payment.expiresYear || payment.expiresYear.length < 2) return 'Ano de vencimento inválido.'
  return ''
}

export const generateOrderId = () =>
  String(Math.floor(Math.random() * 900000) + 100000)
