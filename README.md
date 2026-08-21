# efood

Projeto de delivery de comida (EBAC) com **React + TypeScript + Styled Components + React Router + ESLint**.

> Migrado de Vite para **Create React App (`react-scripts`)** + **ESLint**.

## Stack

- React 18
- TypeScript
- Styled Components
- React Router DOM
- ESLint (`eslint-config-react-app`)
- Autenticação (Context API + localStorage)

## Como rodar

```bash
cd efood
rm -rf node_modules package-lock.json
npm install
npm start
```

Abre em [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm start` | Sobe o app em desenvolvimento |
| `npm run build` | Gera build de produção em `/build` |
| `npm run lint` | Roda o ESLint nos arquivos `src` |
| `npm run lint:fix` | Corrige automaticamente o que for possível |
| `npm test` | Testes (React Scripts) |

## Rotas

- `/` — listagem de restaurantes
- `/restaurant/:id` — cardápio do restaurante
- `/login` — login
- `/register` — cadastro

## Autenticação

- Cadastro e login com e-mail/senha
- Sessão persistida em `localStorage`
- Checkout exige usuário autenticado

## Estrutura

```
src/
├── components/   # Header, Banner, Cards, Cart, Modal, Footer
├── contexts/     # AuthContext
├── data/         # Dados mock dos restaurantes
├── pages/        # Home, Restaurant, Login, Register
├── styles/       # theme, global, styled.d.ts
├── types/
├── App.tsx
└── index.tsx
```
