import styled from 'styled-components'

export const Banner = styled.div<{ $image: string }>`
  height: 280px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
`

export const BannerContent = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 16px;
  color: ${({ theme }) => theme.colors.white};
`

export const Category = styled.p`
  font-size: 32px;
  font-weight: 100;
  margin-bottom: 156px;

  @media (max-width: 768px) {
    margin-bottom: 80px;
    font-size: 24px;
  }
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 56px 16px 0;
`

export const Message = styled.p`
  text-align: center;
  padding: 80px 16px;
  font-size: 18px;
`

export const MenuList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
