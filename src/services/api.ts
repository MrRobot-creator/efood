import { Restaurant } from '../types'

export const RESTAURANTS_API_URL =
  'https://api-ebac.vercel.app/api/efood/restaurantes'

export const fetchRestaurants = async (signal?: AbortSignal): Promise<Restaurant[]> => {
  const response = await fetch(RESTAURANTS_API_URL, { signal })

  if (!response.ok) {
    throw new Error('Não foi possível carregar os restaurantes.')
  }

  const restaurants: Restaurant[] = await response.json()
  return restaurants
}
