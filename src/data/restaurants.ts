import { Restaurant } from '../types'

export const restaurants: Restaurant[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    destacado: true,
    tipo: 'Japonesa',
    avaliacao: 4.9,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar!',
    capa: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80',
    cardapio: [
      {
        id: 1,
        nome: 'Combo Sushi',
        descricao:
          '16 peças: 4 sushis de salmão, 4 de atum, 4 de peixe branco e 4 de camarão.',
        foto: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80',
        porcao: '2 pessoas',
        preco: 88.0
      },
      {
        id: 2,
        nome: 'Sashimi de Salmão',
        descricao: '10 fatias de salmão fresco com wasabi e gengibre.',
        foto: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400&q=80',
        porcao: '1 pessoa',
        preco: 45.0
      },
      {
        id: 3,
        nome: 'Temaki de Atum',
        descricao: 'Temaki crocante recheado com atum fresco e cream cheese.',
        foto: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&q=80',
        porcao: '1 pessoa',
        preco: 22.0
      },
      {
        id: 4,
        nome: 'Yakisoba',
        descricao: 'Macarrão oriental com legumes e frango grelhado.',
        foto: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
        porcao: '1 pessoa',
        preco: 38.0
      },
      {
        id: 5,
        nome: 'Hot Roll',
        descricao: '8 unidades de hot roll empanado com salmão e cream cheese.',
        foto: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&q=80',
        porcao: '1 pessoa',
        preco: 32.0
      },
      {
        id: 6,
        nome: 'Missoshiro',
        descricao: 'Sopa tradicional japonesa de missô com tofu e cebolinha.',
        foto: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80',
        porcao: '1 pessoa',
        preco: 18.0
      }
    ]
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    destacado: true,
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas frescas, pizzas crocantes e molhos caseiros preparados com ingredientes selecionados e muito amor.',
    capa: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=800&q=80',
    cardapio: [
      {
        id: 7,
        nome: 'Pizza Margherita',
        descricao: 'Molho de tomate, mussarela de búfala e manjericão fresco.',
        foto: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80',
        porcao: '2 pessoas',
        preco: 55.0
      },
      {
        id: 8,
        nome: 'Spaghetti alla Carbonara',
        descricao: 'Massa fresca com bacon, ovos, queijo pecorino e pimenta.',
        foto: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        preco: 42.0,
        porcao: ''
      },
      {
        id: 9,
        nome: 'Lasagna Bolonhesa',
        descricao: 'Camadas de massa, molho bolonhesa e queijo gratinado.',
        foto: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&q=80',
        porcao: '1 pessoa',
        preco: 48.0
      },
      {
        id: 10,
        nome: 'Risotto de Funghi',
        descricao: 'Arroz arbóreo com cogumelos frescos e parmesão.',
        foto: 'https://plus.unsplash.com/premium_photo-1694850980439-61487c39be4f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        porcao: '1 pessoa',
        preco: 52.0
      },
      {
        id: 11,
        nome: 'Tiramisu',
        descricao: 'Sobremesa clássica italiana com café e mascarpone.',
        foto: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80',
        porcao: '1 pessoa',
        preco: 28.0
      },
      {
        id: 12,
        nome: 'Bruschetta',
        descricao: 'Pão italiano tostado com tomate, alho e manjericão.',
        foto: 'https://plus.unsplash.com/premium_photo-1677686707252-16013f466e61?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        porcao: '1 pessoa',
        preco: 24.0
      }
    ]
  },
  {
    id: 3,
    titulo: 'Burger House',
    destacado: false,
    tipo: 'Americana',
    avaliacao: 4.7,
    descricao:
      'Os melhores burgers artesanais da cidade! Carne 100% angus, pães brioche frescos e combinações exclusivas. Acompanhe com batatas crocantes e milkshakes cremosos.',
    capa: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
    cardapio: [
      {
        id: 13,
        nome: 'Classic Burger',
        descricao: 'Hambúrguer 180g, queijo cheddar, alface, tomate e molho especial.',
        foto: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80',
        porcao: '1 pessoa',
        preco: 32.0
      },
      {
        id: 14,
        nome: 'Double Cheese',
        descricao: 'Dois hambúrgueres, dobro de queijo e bacon crocante.',
        foto: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80',
        porcao: '1 pessoa',
        preco: 42.0
      },
      {
        id: 15,
        nome: 'Batata Frita',
        descricao: 'Porção generosa de batatas crocantes com tempero especial.',
        foto: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80',
        porcao: '1 pessoa',
        preco: 18.0
      },
      {
        id: 16,
        nome: 'Milkshake de Chocolate',
        descricao: 'Milkshake cremoso de chocolate belga.',
        foto: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80',
        porcao: '1 pessoa',
        preco: 22.0
      }
    ]
  },
  {
    id: 4,
    titulo: 'Cantina Mexicana',
    destacado: false,
    tipo: 'Mexicana',
    avaliacao: 4.5,
    descricao:
      'Sabores autênticos do México! Tacos, burritos, nachos e guacamole fresquinho. Especiarias na medida certa para uma experiência picante e deliciosa.',
    capa: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80',
    cardapio: [
      {
        id: 17,
        nome: 'Tacos de Carne',
        descricao: '3 tacos com carne desfiada, cebola, coentro e molho.',
        foto: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&q=80',
        porcao: '1 pessoa',
        preco: 28.0
      },
      {
        id: 18,
        nome: 'Burrito Supremo',
        descricao: 'Tortilha recheada com feijão, arroz, carne e queijo.',
        foto: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80',
        porcao: '1 pessoa',
        preco: 35.0
      },
      {
        id: 19,
        nome: 'Nachos com Guacamole',
        descricao: 'Nachos crocantes com guacamole, queijo e jalapeños.',
        foto: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&q=80',
        porcao: '2 pessoas',
        preco: 32.0
      },
      {
        id: 20,
        nome: 'Quesadilla',
        descricao: 'Tortilha recheada com queijo derretido e frango.',
        foto: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400&q=80',
        porcao: '1 pessoa',
        preco: 26.0
      }
    ]
  },
  {
    id: 5,
    titulo: 'Green Bowl',
    destacado: false,
    tipo: 'Saudável',
    avaliacao: 4.8,
    descricao:
      'Comida saudável e saborosa! Bowls nutritivos, saladas frescas e smoothies energizantes. Perfeito para quem busca equilíbrio sem abrir mão do sabor.',
    capa: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
    cardapio: [
      {
        id: 21,
        nome: 'Buddha Bowl',
        descricao: 'Quinoa, grão-de-bico, abacate, vegetais e molho tahine.',
        foto: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
        porcao: '1 pessoa',
        preco: 36.0
      },
      {
        id: 22,
        nome: 'Salada Caesar',
        descricao: 'Alface romana, croutons, parmesão e molho caesar light.',
        foto: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=80',
        porcao: '1 pessoa',
        preco: 28.0
      },
      {
        id: 23,
        nome: 'Smoothie Verde',
        descricao: 'Espinafre, banana, abacate e leite de amêndoas.',
        foto: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&q=80',
        porcao: '1 pessoa',
        preco: 18.0
      }
    ]
  },
  {
    id: 6,
    titulo: 'Churrasco do Sul',
    destacado: false,
    tipo: 'Brasileira',
    avaliacao: 4.9,
    descricao:
      'O verdadeiro sabor do churrasco gaúcho! Carnes nobres no ponto certo, acompanhamentos tradicionais e aquele tempero que só o Sul sabe fazer.',
    capa: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80',
    cardapio: [
      {
        id: 24,
        nome: 'Picanha na Brasa',
        descricao: '300g de picanha grelhada com farofa e vinagrete.',
        foto: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
        porcao: '1 pessoa',
        preco: 68.0
      },
      {
        id: 25,
        nome: 'Costela Assada',
        descricao: 'Costela de boi assada lentamente por 8 horas.',
        foto: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&q=80',
        porcao: '2 pessoas',
        preco: 85.0
      },
      {
        id: 26,
        nome: 'Linguiça Toscana',
        descricao: 'Linguiça artesanal grelhada com pão de alho.',
        foto: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80',
        porcao: '1 pessoa',
        preco: 32.0
      }
    ]
  }
]
