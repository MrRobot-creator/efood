import { CartItem } from '../../types'

export type CartStep = 'cart' | 'delivery' | 'payment' | 'success'

export type DeliveryData = {
  receiver: string
  address: string
  city: string
  zipCode: string
  number: string
  complement: string
}

export type PaymentData = {
  cardName: string
  cardNumber: string
  cvv: string
  expiresMonth: string
  expiresYear: string
}

export type CartProps = {
  isOpen: boolean
  items: CartItem[]
  onClose: () => void
  onRemove: (id: number) => void
  onOrderComplete: () => void
  requireAuth?: boolean
  isAuthenticated?: boolean
  onRequireLogin?: () => void
}

export const emptyDelivery: DeliveryData = {
  receiver: '',
  address: '',
  city: '',
  zipCode: '',
  number: '',
  complement: ''
}

export const emptyPayment: PaymentData = {
  cardName: '',
  cardNumber: '',
  cvv: '',
  expiresMonth: '',
  expiresYear: ''
}


export const DELIVERY_FEE = 5
