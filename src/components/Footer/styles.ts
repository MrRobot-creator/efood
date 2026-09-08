import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 40px 16px;
  text-align: center;
  margin-top: 80px;
`

export const Logo = styled.div`
  img {
    width: 132px;
    height: auto;
    display: block;
    margin: 0 auto 32px;
    object-fit: contain;
  }
`

export const Social = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 80px;

  a {
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Copyright = styled.p`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.primary};
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.4;
`
