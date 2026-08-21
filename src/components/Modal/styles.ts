import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
`

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  max-width: 1024px;
  width: 100%;
  position: relative;
  padding: 32px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 28px;
  line-height: 1;
  width: 32px;
  height: 32px;
`

export const Content = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const Portion = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 8px;
  width: fit-content;
  margin-top: auto;
`
