import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
`

export const Sidebar = styled.aside`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  width: 360px;
  max-width: 100%;
  height: 100%;
  padding: 32px 8px;
  overflow-y: auto;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  padding: 0 8px;
`

export const Items = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`

export const Item = styled.li`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  gap: 8px;
  padding: 8px;
  position: relative;
`

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const ItemInfo = styled.div`
  flex: 1;
`

export const ItemName = styled.h3`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`

export const ItemPrice = styled.p`
  font-size: 14px;
`

export const RemoveButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: transparent;
  font-size: 16px;
`

export const FeeRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 0 8px;
  margin-bottom: 8px;
  opacity: 0.95;
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 16px;
  padding: 0 8px;
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
  width: 100%;
  margin-bottom: 8px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const Empty = styled.p`
  text-align: center;
  padding: 32px 8px;
  font-size: 14px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 8px;
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;

  label {
    font-size: 14px;
    font-weight: 700;
  }

  input {
    background-color: ${({ theme }) => theme.colors.secondary};
    border: none;
    padding: 8px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary};
    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.colors.primary};
      opacity: 0.7;
    }

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.secondary};
    }
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`

export const ErrorText = styled.p`
  font-size: 12px;
  color: #ffebee;
  background: rgba(0, 0, 0, 0.2);
  padding: 8px;
  margin-bottom: 8px;
`

export const SuccessText = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding: 0 8px 24px;
`

export const OrderId = styled.p`
  font-size: 14px;
  font-weight: 700;
  padding: 0 8px 16px;
`
