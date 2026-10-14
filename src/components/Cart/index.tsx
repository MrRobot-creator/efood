import { FormEvent, useState, useEffect } from 'react'
import {
  CartProps,
  CartStep,
  DeliveryData,
  PaymentData,
  emptyDelivery,
  emptyPayment,
  DELIVERY_FEE
} from './types'
import {
  validateDelivery,
  validatePayment,
  onlyDigits
} from './utils'
import { submitCheckout } from '../../services/api'
import { Overlay, Sidebar } from './styles'
import CartItems from './CartItems'
import DeliveryForm from './DeliveryForm'
import PaymentForm from './PaymentForm'
import SuccessMessage from './SuccessMessage'

const Cart = ({
  isOpen,
  items,
  onClose,
  onRemove,
  onOrderComplete,
  requireAuth = false,
  isAuthenticated = true,
  onRequireLogin
}: CartProps) => {
  const [step, setStep] = useState<CartStep>('cart')
  const [delivery, setDelivery] = useState<DeliveryData>(emptyDelivery)
  const [payment, setPayment] = useState<PaymentData>(emptyPayment)
  const [error, setError] = useState('')
  const [orderId, setOrderId] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const productsTotal = items.reduce(
    (acc, item) => acc + item.preco * item.quantity,
    0
  )
  const total = productsTotal + (items.length > 0 ? DELIVERY_FEE : 0)

  useEffect(() => {
    if (!isOpen) {
      setStep('cart')
      setError('')
      setDelivery(emptyDelivery)
      setPayment(emptyPayment)
      setOrderId('')
      setIsSubmitting(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  const goToDelivery = () => {
    if (requireAuth && !isAuthenticated) {
      onRequireLogin?.()
      return
    }
    if (items.length === 0) return
    setError('')
    setStep('delivery')
  }

  const handleDeliverySubmit = (e: FormEvent) => {
    e.preventDefault()
    const validationError = validateDelivery(delivery)
    if (validationError) {
      setError(validationError)
      return
    }
    setError('')
    setStep('payment')
  }

  const handlePaymentSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return

    const validationError = validatePayment(payment)
    if (validationError) {
      setError(validationError)
      return
    }
    setError('')
    setIsSubmitting(true)

    try {
      const result = await submitCheckout({
        products: items.map((item) => ({ id: item.id, price: item.preco })),
        delivery,
        payment: {
          card: {
            name: payment.cardName,
            number: onlyDigits(payment.cardNumber),
            code: Number(payment.cvv),
            expires: {
              month: Number(payment.expiresMonth),
              year: Number(payment.expiresYear)
            }
          }
        }
      })
      setOrderId(result.orderId)
      setStep('success')
    } catch (checkoutError) {
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : 'Não foi possível finalizar o pedido. Tente novamente.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFinish = () => {
    onOrderComplete()
    setStep('cart')
    setDelivery(emptyDelivery)
    setPayment(emptyPayment)
    setOrderId('')
    onClose()
  }

  const updateDelivery = (field: keyof DeliveryData, value: string) => {
    setDelivery((prev) => ({ ...prev, [field]: value }))
  }

  const updatePayment = (field: keyof PaymentData, value: string) => {
    setPayment((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Overlay onClick={() => !isSubmitting && onClose()}>
      <Sidebar onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        {step === 'cart' && (
          <CartItems items={items} onRemove={onRemove} onContinue={goToDelivery} />
        )}

        {step === 'delivery' && (
          <DeliveryForm
            delivery={delivery}
            error={error}
            onChange={updateDelivery}
            onSubmit={handleDeliverySubmit}
            onBack={() => {
              setError('')
              setStep('cart')
            }}
          />
        )}

        {step === 'payment' && (
          <PaymentForm
            payment={payment}
            total={total}
            error={error}
            isSubmitting={isSubmitting}
            onChange={updatePayment}
            onSubmit={handlePaymentSubmit}
            onBack={() => {
              setError('')
              setStep('delivery')
            }}
          />
        )}

        {step === 'success' && (
          <SuccessMessage orderId={orderId} onFinish={handleFinish} />
        )}
      </Sidebar>
    </Overlay>
  )
}

export default Cart
