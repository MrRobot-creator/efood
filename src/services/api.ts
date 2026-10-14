import { Restaurant } from '../types'

export const RESTAURANTS_API_URL =
  'https://api-ebac.vercel.app/api/efood/restaurantes'
export const CHECKOUT_API_URL =
  'https://api-ebac.vercel.app/api/efood/checkout'

export type CheckoutData = {
  products: Array<{ id: number; price: number }>
  delivery: {
    receiver: string
    address: string
    city: string
    zipCode: string
    number: string
    complement: string
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

export type CheckoutResult = {
  orderId: string
}

export const fetchRestaurants = async (signal?: AbortSignal): Promise<Restaurant[]> => {
  const response = await fetch(RESTAURANTS_API_URL, { signal })

  if (!response.ok) {
    throw new Error('Não foi possível carregar os restaurantes.')
  }

  const restaurants: Restaurant[] = await response.json()
  return restaurants
}

export const submitCheckout = async (
  checkout: CheckoutData
): Promise<CheckoutResult> => {
  const response = await fetch(CHECKOUT_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(checkout)
  })

  if (!response.ok) {
    throw new Error('Não foi possível finalizar o pedido. Tente novamente.')
  }

  const result: unknown = await response.json()
  if (
    typeof result !== 'object' ||
    result === null ||
    !('orderId' in result) ||
    (typeof result.orderId !== 'string' && typeof result.orderId !== 'number') ||
    String(result.orderId).trim() === ''
  ) {
    throw new Error('A resposta da API não contém um número de pedido válido.')
  }

  return { orderId: String(result.orderId) }
}
