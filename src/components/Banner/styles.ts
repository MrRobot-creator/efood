import styled from 'styled-components'

export const BannerContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0 0 40px;
  text-align: center;
`

export const BannerText = styled.h2`
  font-size: 36px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  max-width: 540px;
  margin: 0 auto;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 0 16px;
  }
`
