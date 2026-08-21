export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

export type MenuItem = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

export type CartItem = MenuItem & {
  quantity: number
}

export type User = {
  id: string
  name: string
  email: string
}

export type AuthCredentials = {
  email: string
  password: string
}

export type RegisterData = AuthCredentials & {
  name: string
}
