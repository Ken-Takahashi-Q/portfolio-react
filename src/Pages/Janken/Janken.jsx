import './Janken.scss';
import { useState, useEffect } from 'react';

function Janken() {
  const [showRule, setShowRule] = useState(false);
  const [score, setScore] = useState(0);
  const [isHandPick, setIsHandPick] = useState(false);
  const [playerPick, setPlayerPick] = useState();
  const [botPick, setBotPick] = useState();
  const [showResult, setShowResult] = useState(false);
  const [showWinner, setShowWinner] = useState(false);

  const toggleModalClose = () => {
    if (showRule) {
      setShowRule(false)
    }
  }

  const handPick = (e) => {
    if (!isHandPick) {
      setIsHandPick(!isHandPick);
      if (e.target.parentNode.className.split(" ")[1]) {
        setPlayerPick(e.target.parentNode.className)
      } else {
        setPlayerPick(e.target.parentNode.parentNode.className)
      }

      setTimeout(() => {
        const handOption = ["choice paper", "choice scissors", "choice rock"];
        const randomIndex = Math.floor(Math.random() * handOption.length);
        setBotPick(handOption[randomIndex])
      }, 500);
    }
  }

  const handlePlayAgain = () => {
    setIsHandPick(false);
    setPlayerPick();
    setBotPick();
    setShowResult(false);
    setShowWinner(false);
  }

  useEffect(() => {
    if (playerPick) {
      const playerHand = playerPick.split(" ")[1];
      const botHand = botPick.split(" ")[1];

      if ((playerHand === "rock" && botHand === "scissors") ||
      (playerHand === "scissors" && botHand === "paper") ||
      (playerHand === "paper" && botHand === "rock")) {
        setScore(score + 1);
        setShowWinner("YOU WIN")
      } else if ((playerHand === "scissors" && botHand === "rock") ||
      (playerHand === "paper" && botHand === "scissors") ||
      (playerHand === "rock" && botHand === "paper")) {
        setScore(score - 1);
        setShowWinner("YOU LOSE")
      } else {
        setShowWinner("TIE")
      }

      setTimeout(() => {
        setShowResult(true);
      }, 500);
    }
  }, [botPick])

  return (
    <main className={showRule ? "hidden" : ""}>
      <div className={`app-foreground ${showRule ? "hidden" : ""}`}>
        <div className={`white-filter ${showRule ? "show" : ""}`} onClick={toggleModalClose}>
        </div>
        <div className="game-header">
          <img src="/images/janken/logo.svg" alt="rock-paper-scissor" />
          <div className="game-score">
            <p>SCORE</p>
            <h1>{score}</h1>
          </div>
        </div>

        <div className="game-section">
          <div className={`hand-choice ${isHandPick ? "hidden" : ""}`}>
            <div className="top-row">
              <div className={`choice paper ${isHandPick ? playerPick.split(" ")[1]==="paper" ? "p-move" : "hidden" : ""} ${showResult ? "p-shift" : ""}`} onClick={(e) => handPick(e)}>
                <div className="circle-1"></div>
                <div className="circle-2"></div>
                <div className="circle-3"></div>
                <div className="circle-4"></div>
                <div className="hand-action">
                  <img src="/images/janken/icon-paper.svg" alt="Paper" /> 
                </div>
              </div>

              <div className={`choice scissors ${isHandPick ? playerPick.split(" ")[1]==="scissors" ? "s-move" : "hidden" : ""} ${showResult ? "s-shift" : ""}`} onClick={(e) => handPick(e)}>
                <div className="circle-1"></div>
                <div className="circle-2"></div>
                <div className="circle-3"></div>
                <div className="circle-4"></div>
                <div className="hand-action">
                  <img src="/images/janken/icon-scissors.svg" alt="scissors" />
                </div>
              </div>
            </div>

            <div className="bottom-row">
              <div className={`choice rock ${isHandPick ? playerPick.split(" ")[1]==="rock" ? "r-move" : "hidden" : ""} ${showResult ? "r-shift" : ""}`} onClick={(e) => handPick(e)}>
                <div className="circle-1"></div>
                <div className="circle-2"></div>
                <div className="circle-3"></div>
                <div className="circle-4"></div>
                <div className="hand-action">
                  <img src="/images/janken/icon-rock.svg" alt="rock" />
                </div>
              </div>
            </div>

          </div>

          <div className={`hand-result ${showResult ? "show-result" : isHandPick ? "" : "hidden"}`}>
            <div className="hand-result left-side">
              <h2>YOU PICKED</h2>
              <div className="pulse"></div>
            </div>

            <div className={`hand-result middle ${showResult ? "" : "hidden"}`}>
              <h1>{showWinner}</h1>
              <button onClick={handlePlayAgain}>PLAY AGAIN</button>
            </div>
            
            <div className="hand-result right-side">
              <h2>THE HOUSE PICKED</h2>
              {botPick ?
                <div className={`${botPick}`}>
                  <div className="circle-1"></div>
                  <div className="circle-2"></div>
                  <div className="circle-3"></div>
                  <div className="circle-4"></div>
                  <div className="hand-action">
                    <img src={botPick ? `/images/janken/icon-${botPick.split(" ")[1]}.svg` : ""} alt={botPick?.split(" ")[1]} />
                  </div>
                </div>
                : <div className="waiting-bot"></div>
              }
              <div className="pulse n-1"></div>
              <div className="pulse n-2"></div>
              <div className="pulse n-3"></div>
              <div className="pulse n-4"></div>
            </div>
            
          </div>

        </div>

        <div className="game-rule-button">
          <button onClick={() => setShowRule(true)}>
            RULES
          </button>
        </div>
      </div>
      
      <div className={`modal-rules ${showRule ? "" : "hidden"}`}>
        <div className="rules-header">
          <h1>RULES</h1>
          <div className="close-button" onClick={() => setShowRule(false)} >
            <img src="/images/janken/icon-close.svg" alt="close"/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Janken;
