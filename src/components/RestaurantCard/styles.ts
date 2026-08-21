import styled from 'styled-components'

export const Card = styled.article`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`

export const ImageWrapper = styled.div`
  position: relative;
  height: 217px;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 12px;
  font-weight: 700;
  padding: 6px 4px;
`

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 8px 0;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`

export const Rating = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    color: #ffb930;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.primary};
  padding: 16px 8px;
  flex: 1;
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  margin: 0 8px 8px;
  width: fit-content;
  display: inline-block;
`
