import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'
import {
  Name,
  HeaderContainer,
  MainContainer,
  NameContainer,
  ScoreContainer,
  ScoreText,
  Score,
  PlayingViewContainer,
  PlayingViewTopContainer,
  PlayingViewBottomContainer,
  PlayingViewButton,
  Image,
  PopupButton,
  PopupContainer,
  CloseButton,
  RuLesImgContainer,
  RulesImg,
  PlayAgainButton,
  ResultViewContainer,
  ResultViewTopContainer,
  ResultViewBottomContainer,
  PlayerContainer,
  ResultText,
} from './styledComponents'

class MainComponent extends Component {
  state = {
    RandomIndex: '',
    Result: '',
    TotalScore: 0,
    isPlayingMode: true,
    myTurnIndex: '',
  }

  gameLogic = FirstInd => {
    const {choicesList} = this.props
    const SecondInd = Math.floor(Math.random() * (choicesList.length - 1))

    this.setState({
      isPlayingMode: false,
      myTurnIndex: FirstInd,
      RandomIndex: SecondInd,
    })

    if (FirstInd === 0) {
      if (SecondInd === 1) {
        this.setState({Result: 'YOU WON'})
        this.setState(prevState => ({TotalScore: prevState.TotalScore + 1}))
      } else if (SecondInd === 0) {
        this.setState({Result: 'IT IS DRAW'})
      } else {
        this.setState({Result: 'YOU LOSE'})
        this.setState(prevState => ({TotalScore: prevState.TotalScore - 1}))
      }
    } else if (FirstInd === 1) {
      if (SecondInd === 2) {
        this.setState({Result: 'YOU WON'})
        this.setState(prevState => ({TotalScore: prevState.TotalScore + 1}))
      } else if (SecondInd === 1) {
        this.setState({Result: 'IT IS DRAW'})
      } else {
        this.setState({Result: 'YOU LOSE'})
        this.setState(prevState => ({TotalScore: prevState.TotalScore - 1}))
      }
    } else if (FirstInd === 2) {
      if (SecondInd === 0) {
        this.setState({Result: 'YOU WON'})
        this.setState(prevState => ({TotalScore: prevState.TotalScore + 1}))
      } else if (SecondInd === 2) {
        this.setState({Result: 'IT IS DRAW'})
      } else {
        this.setState({Result: 'YOU LOSE'})
        this.setState(prevState => ({TotalScore: prevState.TotalScore - 1}))
      }
    }
  }

  playing0 = () => {
    this.gameLogic(0)
  }

  playing1 = () => {
    this.gameLogic(1)
  }

  playing2 = () => {
    this.gameLogic(2)
  }

  playAgain = () => {
    this.setState({RandomIndex: '', isPlayingMode: true, myTurnIndex: ''})
  }

  resultView = () => {
    const {choicesList} = this.props
    const {myTurnIndex, Result, RandomIndex} = this.state

    return (
      <ResultViewContainer>
        <ResultViewTopContainer>
          <PlayerContainer>
            <Name>You</Name>
            <Image alt="your choice" src={choicesList[myTurnIndex].imageUrl} />
          </PlayerContainer>

          <PlayerContainer>
            <Name>Opponent</Name>
            <Image
              alt="opponent choice"
              src={choicesList[RandomIndex].imageUrl}
            />
          </PlayerContainer>
        </ResultViewTopContainer>
        <ResultViewBottomContainer>
          <ResultText>{Result}</ResultText>
          <PlayAgainButton onClick={this.playAgain} type="button">
            PLAY AGAIN
          </PlayAgainButton>
        </ResultViewBottomContainer>
      </ResultViewContainer>
    )
  }

  GameView = () => {
    const {choicesList} = this.props

    return (
      <PlayingViewContainer>
        <PlayingViewTopContainer>
          <PlayingViewButton data-testid="rockButton" onClick={this.playing0}>
            <Image alt="ROCK" src={choicesList[0].imageUrl} />
          </PlayingViewButton>
          <PlayingViewButton
            data-testid="scissorsButton"
            onClick={this.playing1}
          >
            <Image alt="SCISSORS" src={choicesList[1].imageUrl} />
          </PlayingViewButton>
        </PlayingViewTopContainer>
        <PlayingViewBottomContainer>
          <PlayingViewButton data-testid="paperButton" onClick={this.playing2}>
            <Image alt="PAPER" src={choicesList[2].imageUrl} />
          </PlayingViewButton>
        </PlayingViewBottomContainer>
      </PlayingViewContainer>
    )
  }

  render() {
    const {TotalScore, isPlayingMode} = this.state

    return (
      <MainContainer>
        <HeaderContainer>
          <NameContainer>
            <Name>Rock Paper Scissors</Name>
          </NameContainer>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <Score>{TotalScore}</Score>
          </ScoreContainer>
        </HeaderContainer>
        {isPlayingMode ? this.GameView() : this.resultView()}
        <Popup modal trigger={<PopupButton>RULES</PopupButton>}>
          {close => (
            <PopupContainer>
              <CloseButton onClick={() => close()} type="button">
                <RiCloseLine />
              </CloseButton>
              <RuLesImgContainer>
                <RulesImg
                  alt="rules"
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                />
              </RuLesImgContainer>
            </PopupContainer>
          )}
        </Popup>
      </MainContainer>
    )
  }
}

export default MainComponent
