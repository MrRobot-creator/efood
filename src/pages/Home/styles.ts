import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 80px 16px 0;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`
