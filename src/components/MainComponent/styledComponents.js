import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 5%;
  font-family: 'Bree Serif';
  @media screen and (min-width: 768px) {
    gap: 35px;
  }
`

export const HeaderContainer = styled.div`
  border: 2px groove #ffffff;
  border-radius: 15px;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2% 3% 2% 3%;
`

export const Name = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 19px;
  font-weight: 400;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: #223a5f;
  width: 150px;
  border-radius: 15px;
`
export const Score = styled.p`
  margin-top: 0px;
  font-size: 36px;
  font-family: 'Roboto';
`
export const ScoreText = styled.p`
  margin-bottom: 0px;
  font-size: 18px;
`
export const PlayingViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const PlayingViewTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`

export const PlayingViewBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PlayingViewButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const Image = styled.img`
  width: 120px;
`
export const PopupButton = styled.button`
  color: #223a5f;
  background-color: #ffffff;
  align-self: flex-end;
  margin-right: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
`
export const PopupContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: #223a5f;
  align-self: flex-end;
`
export const RuLesImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const RulesImg = styled.img`
  width: 90%;
`
export const PlayAgainButton = styled.button`
  color: #223a5f;
  background-color: #ffffff;

  border: none;
  outline: none;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
`

export const ResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const ResultViewTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 35px;
`

export const ResultViewBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResultText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 19px;
  font-weight: 400;
  text-align: center;
`
