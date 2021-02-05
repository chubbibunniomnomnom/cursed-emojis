import React, { Component } from "react";
import { withRouter } from "react-router";
import "./HostsGame.css";
import { getHostSocket } from "../../SocketIoConnection";
import Countdown from "react-countdown";
import { playBackgroundMusic, playPunchSound, playPunchHitSound, playShakeSound, speakText } from "./Sounds";
import holdPhoneDownImage from "../../images/hold-phone-down.png";
import holdPhoneMidImage from "../../images/hold-phone-mid.png";
import holdPhoneUpImage from "../../images/hold-phone-up.png";
import chargingPunchImage from "../../images/starting-punch.png";
import completedPunchImage from "../../images/completed-punch.png";
import completedStrongPunchImage from "../../images/completed-powerful-punch.png";
import emoji1 from "../../images/emoji1.png";
import emoji2 from "../../images/emoji2.png";
import emoji3 from "../../images/emoji3.png";
import emoji4 from "../../images/emoji4.png";
import emoji5 from "../../images/emoji5.png";
import emoji6 from "../../images/emoji6.png";
import emoji7 from "../../images/emoji7.png";
import emoji8 from "../../images/emoji8.png";
import emoji9 from "../../images/emoji9.png";
import emoji10 from "../../images/emoji10.png";
import emoji11 from "../../images/emoji11.png";
import emoji12 from "../../images/emoji12.png";
import emoji13 from "../../images/emoji13.png";
import emoji14 from "../../images/emoji14.png";
import emoji15 from "../../images/emoji15.png";
import emoji16 from "../../images/emoji16.png";
import emoji17 from "../../images/emoji17.png";
import emoji18 from "../../images/emoji18.png";
import emoji19 from "../../images/emoji19.png";
import emoji20 from "../../images/emoji20.png";
import emoji21 from "../../images/emoji21.png";
import emoji22 from "../../images/emoji22.png";
import emoji23 from "../../images/emoji23.png";
import emoji24 from "../../images/emoji24.png";
import emoji25 from "../../images/emoji25.png";
import emoji26 from "../../images/emoji26.png";
import emoji27 from "../../images/emoji27.png";
import emoji28 from "../../images/emoji28.png";
import emoji29 from "../../images/emoji29.png";
import emoji30 from "../../images/emoji30.png";
import emoji31 from "../../images/emoji31.png";
import emoji32 from "../../images/emoji32.png";
import emoji33 from "../../images/emoji33.png";
import emoji34 from "../../images/emoji34.png";
import emoji35 from "../../images/emoji35.png";
import emoji36 from "../../images/emoji36.png";
import emoji37 from "../../images/emoji37.png";
import emoji38 from "../../images/emoji38.png";
import emoji39 from "../../images/emoji39.png";
import emoji40 from "../../images/emoji40.png";
import emoji41 from "../../images/emoji41.png";
import emoji42 from "../../images/emoji42.png";
import emoji43 from "../../images/emoji43.png";
import emoji44 from "../../images/emoji44.png";
import emoji45 from "../../images/emoji45.png";
import emoji46 from "../../images/emoji46.png";
import emoji47 from "../../images/emoji47.png";
import emoji48 from "../../images/emoji48.png";
import emoji49 from "../../images/emoji49.png";
import emoji50 from "../../images/emoji50.png";
import emoji51 from "../../images/emoji51.png";
import emoji52 from "../../images/emoji52.png";
import emoji53 from "../../images/emoji53.png";
import emoji54 from "../../images/emoji54.png";
import emoji55 from "../../images/emoji55.png";
import emoji56 from "../../images/emoji56.png";
import emoji57 from "../../images/emoji57.png";
import emoji58 from "../../images/emoji58.png";
import emoji59 from "../../images/emoji59.png";
import emoji60 from "../../images/emoji60.png";
import emoji61 from "../../images/emoji61.png";
import emoji62 from "../../images/emoji62.png";
import emoji63 from "../../images/emoji63.png";
import emoji64 from "../../images/emoji64.png";
import emoji65 from "../../images/emoji65.png";
import emoji66 from "../../images/emoji66.png";
import emoji67 from "../../images/emoji67.png";
import emoji68 from "../../images/emoji68.png";
import emoji69 from "../../images/emoji69.png";
import emoji70 from "../../images/emoji70.png";
import emoji71 from "../../images/emoji71.png";
import emoji72 from "../../images/emoji72.png";
import emoji73 from "../../images/emoji73.png";
import emoji74 from "../../images/emoji74.png";
import emoji75 from "../../images/emoji75.png";
import emoji76 from "../../images/emoji76.png";
import emoji77 from "../../images/emoji77.png";
import emoji78 from "../../images/emoji78.png";
import emoji79 from "../../images/emoji79.png";
import emoji80 from "../../images/emoji80.png";
import emoji81 from "../../images/emoji81.png";
import emoji82 from "../../images/emoji82.png";
import emoji83 from "../../images/emoji83.png";
import emoji84 from "../../images/emoji84.png";
import emoji85 from "../../images/emoji85.png";
import emoji86 from "../../images/emoji86.png";
import emoji87 from "../../images/emoji87.png";
import emoji88 from "../../images/emoji88.png";
import emoji89 from "../../images/emoji89.png";
import emoji90 from "../../images/emoji90.png";
import emoji91 from "../../images/emoji91.png";

class HostsGame extends Component {
  state = {
    phase: "SHOW_INSTRUCTIONS",
    shakeImageSrc: holdPhoneMidImage,
  };
  
  componentDidMount() {
    this.onStartNewGameNewPlayersClick = this.onStartNewGameNewPlayersClick.bind(this);
    const socket = getHostSocket();
    if (!socket) {
      // For easier local debugging with live-reload changes
      this.props.history.push("/create");
      return;
    }
    socket.on("PLAYER_ANSWER_RECEIVED", (expectedNumberOfAnswers, receivedNumberOfAnswers) => {
      playPunchSound();
      this.setState({ expectedNumberOfAnswers, receivedNumberOfAnswers });
    });
    socket.on("PLAYER_VOTE_RECEIVED", (expectedNumberOfVotes, receivedNumberOfVotes) => {
      playPunchSound();
      this.setState({
        expectedNumberOfVotes,
        receivedNumberOfVotes,
      });
    });
    socket.on("PLAYER_DISCONNECTED", (playerName) => {
      alert(`${playerName} has disconnected from the game.  Please create a new game to keep playing.`);
      this.props.history.push("/create");
    });
    socket.on("START_GAME", (expectedNumberOfAnswers) => {
      this.setState({ phase: "SHOW_INSTRUCTIONS", expectedNumberOfAnswers, receivedNumberOfAnswers: 0 });
      speakText(
        "Starting new game.  You'll get two prompts. Enter something hilarious. Your friends will vote for the most funny response.",
      );
    });
    socket.on("START_VOTING_PHASE", (onePromptAndAnswers, expectedNumberOfVotes) => {
      this.setState({
        phase: "VOTING_PHASE",
        prompt: onePromptAndAnswers.prompt,
        votingOptions: onePromptAndAnswers.answers,
        expectedNumberOfVotes,
        receivedNumberOfVotes: 0,
      });
      speakText(
        `${getSpokenAnswer(onePromptAndAnswers.answers[0])}, or, ${getSpokenAnswer(
          onePromptAndAnswers.answers[1],
        )}.  Vote now!`,
      );
    });
    socket.on("VOTING_RESULTS", (votingResults, hasMoreRounds) => {
      this.setState({ phase: "VOTING_RESULTS_PHASE", hasMoreRounds, votingResults });
      for (let votingResult of votingResults) {
        if (votingResult.state === "WINNER") {
          if (votingResult.quiplash) {
            speakText("Quiplash for " + getSpokenAnswer(votingResult.answer));
            break;
          } else {
            speakText("The winner is " + getSpokenAnswer(votingResult.answer));
            break;
          }
        } else if (votingResult.state === "TIE") {
          speakText("Tie vote");
          break;
        }
      }
    });
    socket.on("SHOW_PLAYER_POINTS", (playersAndPoints, popularAnswers) => {
      this.setState({ phase: "SHOW_PLAYER_POINTS", playersAndPoints, popularAnswers });
      speakText(`Here are the final scores.  ${playersAndPoints[0][0]} is the winner!`);
    });
    socket.on("SHOW_SHAKE_INSTRUCTIONS", (players) => {
      const playersObject = {};
      for (let player of players) {
        playersObject[player.name] = 0;
      }
      speakText(`Get ready to shake your phone up and down as fast as you can.`);
      this.setState({ phase: "SHOW_SHAKE_INSTRUCTIONS", shakePlayers: playersObject });
    });
    socket.on("START_SHAKING", () => {
      this.setState({ phase: "SHAKE_COUNTDOWN", getReadyCountdownTimer: Date.now() + 3000 });
    });
    socket.on("SHAKE_COUNT_UP", (playerName) => {
      this.state.shakePlayers[playerName]++;
      playShakeSound();
      this.setState({ shakePlayers: this.state.shakePlayers });
    });
    socket.on("SHOW_SHAKE_RESULTS", () => {
      let winner;
      let highScore = -1;
      for (let playerName in this.state.shakePlayers) {
        const shakes = this.state.shakePlayers[playerName];
        if (shakes > highScore) {
          winner = playerName;
          highScore = shakes;
        }
      }
      speakText(`The winner is ${winner}!`);
      this.setState({
        phase: "SHOW_SHAKE_RESULTS",
        gameWinner: winner,
        gamePlayersResults: Object.assign({}, this.state.shakePlayers),
      });
    });

    socket.on("SHOW_PUNCH_INSTRUCTIONS", (players) => {
      const playersObject = {};
      for (let player of players) {
        playersObject[player.name] = { punchAccel: 0, state: "STARTING_PUNCH" };
      }
      speakText(`Grip your phone and get ready to punch as hard as you can.`);
      this.setState({ phase: "SHOW_PUNCH_INSTRUCTIONS", punchPlayers: playersObject });
    });
    socket.on("START_PUNCHING", () => {
      this.setState({ phase: "PUNCH_COUNTDOWN", getReadyCountdownTimer: Date.now() + 3000 });
    });
    socket.on("STARTING_PUNCH", (playerName, punchAccel) => {
      if (punchAccel > this.state.punchPlayers[playerName].punchAccel) {
        this.state.punchPlayers[playerName].punchAccel = punchAccel;
      }
      if (punchAccel >= 5) {
        this.state.punchPlayers[playerName].state = "STARTING_STRONG_PUNCH";
      } else {
        this.state.punchPlayers[playerName].state = "STARTING_PUNCH";
      }
      playPunchHitSound();
      this.setState({ punchPlayers: this.state.punchPlayers });
    });
    socket.on("STOPPED_PUNCH", (playerName) => {
      this.state.punchPlayers[playerName].state = "STOPPED_PUNCH";
      this.setState({ punchPlayers: this.state.punchPlayers });
    });
    socket.on("SHOW_PUNCH_RESULTS", () => {
      let winner;
      let highScore = -1;
      for (let playerName in this.state.punchPlayers) {
        const punchAccel = this.state.punchPlayers[playerName].punchAccel;
        if (punchAccel > highScore) {
          winner = playerName;
          highScore = punchAccel;
        }
      }
      speakText(`The winner is ${winner}!`);
      this.setState({
        phase: "SHOW_PUNCH_RESULTS",
        gameWinner: winner,
        gamePlayersResults: JSON.parse(JSON.stringify(this.state.punchPlayers)),
      });
    });
    playBackgroundMusic();
  }

  promptToImage(str) {
    if (str === "emoji1") {
      return emoji1;
    }
    if (str === "emoji2") {
      return emoji2;
    }
    if (str === "emoji3") {
      return emoji3;
    }
    if (str === "emoji4") {
      return emoji4;
    }
    if (str === "emoji5") {
      return emoji5;
    }
    if (str === "emoji6") {
      return emoji6;
    }
    if (str === "emoji7") {
      return emoji7;
    }
    if (str === "emoji8") {
      return emoji8;
    }
    if (str === "emoji9") {
      return emoji9;
    }
    if (str === "emoji10") {
      return emoji10;
    }
    if (str === "emoji11") {
      return emoji11;
    }
    if (str === "emoji12") {
      return emoji12;
    }
    if (str === "emoji13") {
      return emoji13;
    }
    if (str === "emoji14") {
      return emoji14;
    }
    if (str === "emoji15") {
      return emoji15;
    }
    if (str === "emoji16") {
      return emoji16;
    }
    if (str === "emoji17") {
      return emoji17;
    }
    if (str === "emoji18") {
      return emoji18;
    }
    if (str === "emoji19") {
      return emoji19;
    }
    if (str === "emoji20") {
      return emoji20;
    }
    if (str === "emoji21") {
      return emoji21;
    }
    if (str === "emoji22") {
      return emoji22;
    }
    if (str === "emoji23") {
      return emoji23;
    }
    if (str === "emoji24") {
      return emoji24;
    }
    if (str === "emoji25") {
      return emoji25;
    }
    if (str === "emoji26") {
      return emoji26;
   }
    if (str === "emoji27") {
      return emoji27;
    }
   if (str === "emoji28") {
      return emoji28;
    }
   if (str === "emoji29") {
      return emoji29;
    }
   if (str === "emoji30") {
      return emoji30;
    }
   if (str === "emoji31") {
      return emoji31;
    }
   if (str === "emoji32") {
      return emoji32;
    }
   if (str === "emoji33") {
      return emoji33;
    }
   if (str === "emoji34") {
      return emoji34;
    }
   if (str === "emoji35") {
      return emoji35;
    }
   if (str === "emoji36") {
      return emoji36;
    }
   if (str === "emoji37") {
      return emoji37;
    }
    if (str === "emoji38") {
      return emoji38;
    }
    if (str === "emoji39") {
      return emoji39;
    }
    if (str === "emoji40") {
      return emoji40;
    }
    if (str === "emoji41") {
      return emoji41;
    }
   if (str === "emoji42") {
      return emoji42;
    }
   if (str === "emoji43") {
      return emoji43;
    }
   if (str === "emoji44") {
      return emoji44;
    }
   if (str === "emoji45") {
      return emoji45;
    }
   if (str === "emoji46") {
      return emoji46;
    }
   if (str === "emoji47") {
      return emoji47;
    }
    if (str === "emoji48") {
      return emoji48;
    }
    if (str === "emoji49") {
      return emoji49;
    }
    if (str === "emoji50") {
      return emoji50;
    }
    if (str === "emoji51") {
      return emoji51;
    }
   if (str === "emoji52") {
      return emoji52;
    }
   if (str === "emoji53") {
      return emoji53;
    }
   if (str === "emoji54") {
      return emoji54;
    }
   if (str === "emoji55") {
      return emoji55;
    }
   if (str === "emoji56") {
      return emoji56;
    }
   if (str === "emoji57") {
      return emoji57;
    }
    if (str === "emoji58") {
      return emoji58;
    }
    if (str === "emoji59") {
      return emoji59;
    }
    if (str === "emoji60") {
      return emoji60;
    }
    if (str === "emoji61") {
      return emoji61;
    }
   if (str === "emoji62") {
      return emoji62;
    }
   if (str === "emoji63") {
      return emoji63;
    }
   if (str === "emoji64") {
      return emoji64;
    }
   if (str === "emoji65") {
      return emoji65;
    }
   if (str === "emoji66") {
      return emoji66;
    }
   if (str === "emoji67") {
      return emoji67;
    }
    if (str === "emoji68") {
      return emoji68;
    }
    if (str === "emoji69") {
      return emoji69;
    }
    if (str === "emoji70") {
      return emoji70;
    }
    if (str === "emoji71") {
      return emoji71;
    }
   if (str === "emoji72") {
      return emoji72;
    }
   if (str === "emoji73") {
      return emoji73;
    }
   if (str === "emoji74") {
      return emoji74;
    }
   if (str === "emoji75") {
      return emoji75;
    }
   if (str === "emoji76") {
      return emoji76;
    }
   if (str === "emoji77") {
      return emoji77;
    }
    if (str === "emoji78") {
      return emoji78;
    }
    if (str === "emoji79") {
      return emoji79;
    }
    if (str === "emoji80") {
      return emoji80;
    }
    if (str === "emoji81") {
      return emoji81;
    }
   if (str === "emoji82") {
      return emoji82;
    }
   if (str === "emoji83") {
      return emoji83;
    }
   if (str === "emoji84") {
      return emoji84;
    }
   if (str === "emoji85") {
      return emoji85;
    }
   if (str === "emoji86") {
      return emoji86;
    }
   if (str === "emoji87") {
      return emoji87;
    }
    if (str === "emoji88") {
      return emoji88;
    }
    if (str === "emoji89") {
      return emoji89;
    }
    if (str === "emoji90") {
      return emoji90;
    }
    if (str === "emoji91") {
      return emoji91;
    }
  }

  onStartNewGameNewPlayersClick() {
    this.props.history.push("/create");
  }

  onStartNewGameSamePlayersClick() {
    getHostSocket().emit("HOST_STARTING_GAME");
  }

  onStartNewRoundClick() {
    getHostSocket().emit("HOST_START_ROUND");
  }

  onStartPunchRoundClick() {
    getHostSocket().emit("HOST_START_PUNCH_ROUND");
  }

  onStartShakeRoundClick() {
    getHostSocket().emit("HOST_START_SHAKE_ROUND");
  }

  render() {
    switch (this.state.phase) {
      case "SHOW_INSTRUCTIONS":
        return (
          <div>
            <h1>Look at your devices. Fill out a silly answer to your prompt.</h1>
            <div>{`${this.state.receivedNumberOfAnswers}/${this.state.expectedNumberOfAnswers} answers received`}</div>
          </div>
        );
      case "SHOW_PLAYER_POINTS":
        const popularAnswerOne = this.state.popularAnswers[0].answer.startsWith("data:") ? (
          <img className="uploaded-image" src={this.state.popularAnswers[0].answer} />
        ) : (
          <div>{this.state.popularAnswers[0].answer}</div>
        );
        const popularAnswerTwo = this.state.popularAnswers[1].answer.startsWith("data:") ? (
          <img className="uploaded-image" src={this.state.popularAnswers[1].answer} />
        ) : (
          <div>{this.state.popularAnswers[1].answer}</div>
        );
        return (
          <div>
            <h1>Final Scores</h1>
            <div className="player-scores-container">
              <div className="player-scores-column">
                <div>Most popular answer</div>
                <div className="popular-answer">{popularAnswerOne}</div>
                <div className="popular-answer-submitter">{`Submitted by ${this.state.popularAnswers[0].submitter}`}</div>
              </div>
              <div className="player-scores-column">
                <div className="player-scores">
                  {this.state.playersAndPoints.map((playerAndPoints) => (
                    <h2>{`${playerAndPoints[0]} : ${playerAndPoints[1]}`}</h2>
                  ))}
                </div>
                <div>Scores carry over to the next game</div>
                <div className="start-game-buttons-container">
                  Start New Game with
                  <button
                    className="submit-form-button start-new-game-button"
                    onClick={this.onStartNewGameSamePlayersClick}
                  >
                    Same players
                  </button>
                  <button
                    className="submit-form-button start-new-game-button"
                    onClick={this.onStartNewGameNewPlayersClick}
                  >
                    New players
                  </button>
                </div>
              </div>
              <div className="player-scores-column">
                <div>Second most popular answer</div>
                <div className="popular-answer">{popularAnswerTwo}</div>
                <div className="popular-answer-submitter">{`Submitted by ${this.state.popularAnswers[1].submitter}`}</div>
              </div>
            </div>
          </div>
        );
      case "VOTING_PHASE":
        let answersCount = 0;
        return (
          <div>
            <img src={this.promptToImage(this.state.prompt)} />
            <div className="answers">
              {this.state.votingOptions.map((voteOption) => {
                let cardClasses = "card";
                if (answersCount % 2 === 1) {
                  cardClasses += " reversed";
                }
                answersCount++;
                const cardContent = voteOption.startsWith("data:") ? (
                  <img className="uploaded-image" src={voteOption} />
                ) : (
                  <h1>{voteOption}</h1>
                );
                return (
                  <div className="wrapper">
                    <div className={cardClasses}>{cardContent}</div>
                  </div>
                );
              })}
            </div>
            <div className="vote-instructions">Look at your device and vote for your favorite.</div>
            <div>{`${this.state.receivedNumberOfVotes}/${this.state.expectedNumberOfVotes} votes received`}</div>
          </div>
        );
      case "VOTING_RESULTS_PHASE":
        let count = 0;
        return (
          <div>
            <img className="pic" src={this.promptToImage(this.state.prompt)} />
            <div className="answers">
              {this.state.votingResults.map((voteResult) => {
                let cardClasses = "card";
                if (count % 2 === 1) {
                  cardClasses += " reversed";
                }
                count++;
                if (voteResult.state === "WINNER") {
                  cardClasses += " winning-answer";
                  if (voteResult.quiplash) {
                    cardClasses += " winning-quiplash";
                  }
                } else if (voteResult.state === "LOSER") {
                  cardClasses += " losing-answer";
                }
                const cardContent = voteResult.answer.startsWith("data:") ? (
                  <img className="uploaded-image" src={voteResult.answer} />
                ) : (
                  <h1>{voteResult.answer}</h1>
                );
                return (
                  <div className="wrapper">
                    <div className={cardClasses}>
                      {voteResult.quiplash && <div className="quiplash-text">QUIPLASH</div>}
                      {cardContent}
                    </div>
                    <div className="submitter">{`Submitted by ${voteResult.submitter}`}</div>
                    <div className="points-gained">{`${
                      voteResult.points ? "+" + voteResult.points : "No"
                    } Points`}</div>
                    <div className="voters">
                      {voteResult.votes.length === 0 ? "No Votes" : voteResult.votes.join(", ")}
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="submit-form-button start-new-round-button" onClick={this.onStartNewRoundClick}>
              {this.state.hasMoreRounds ? "Start Next Round" : "View Scores"}
            </button>
          </div>
        );
      case "SHOW_SHAKE_INSTRUCTIONS":
        // TODO theme based on shaking soda pop
        return (
          <div>
            <h1>Get ready to shake your phone up and down!</h1>
            <h2>Whoever shakes the most in five seconds, wins</h2>
            <div className="all-shake-players">{getShakeGamePlayersComponent(this.state.shakePlayers)}</div>
            <br />
            <button className="submit-form-button start-new-round-button" onClick={this.onStartShakeRoundClick}>
              Start
            </button>
          </div>
        );
      case "SHAKE_COUNTDOWN":
        return (
          <div>
            <Countdown
              date={this.state.getReadyCountdownTimer}
              renderer={({ seconds }) => <h1>{`Starting in ${seconds}`}</h1>}
              onComplete={() => {
                for (let playerName in this.state.shakePlayers) {
                  this.state.shakePlayers[playerName] = 0;
                }
                speakText(`Start shaking!`);
                this.setState({
                  phase: "START_SHAKING",
                  roundCountdownTimer: Date.now() + 5000,
                  shakePlayers: this.state.shakePlayers,
                });
              }}
            />
            <div className="all-shake-players">{getShakeGamePlayersComponent(this.state.shakePlayers)}</div>
          </div>
        );
      case "START_SHAKING":
        // TODO background music?
        // TODO winning animation?
        // TODO extract shake logic as a module similar to future games?
        return (
          <div>
            <Countdown
              date={this.state.roundCountdownTimer}
              renderer={countdownRenderer}
              onComplete={() => getHostSocket().emit("HOST_SHAKE_DONE")}
            />
            <div className="all-shake-players">{getShakeGamePlayersComponent(this.state.shakePlayers)}</div>
          </div>
        );
      case "SHOW_SHAKE_RESULTS":
        return (
          <div>
            <h1>{`Winner - ${this.state.gameWinner}`}</h1>
            <div className="all-shake-players">
              {getShakeGamePlayersComponent(this.state.shakePlayers, true, this.state.gamePlayersResults)}
            </div>
            <div className="button-bar">
              <button className="submit-form-button start-new-round-button" onClick={this.onStartShakeRoundClick}>
                Play Again
              </button>
              <button className="submit-form-button start-new-game-button" onClick={this.onStartNewGameNewPlayersClick}>
                Play Different Game
              </button>
            </div>
          </div>
        );
      case "SHOW_PUNCH_INSTRUCTIONS":
        return (
          <div>
            <h1>Get ready to punch while holding your phone!</h1>
            <h2>Whoever has the most powerful punch, wins</h2>
            <div className="all-shake-players">{getPunchGamePlayersComponent(this.state.punchPlayers)}</div>
            <br />
            <button className="submit-form-button start-new-round-button" onClick={this.onStartPunchRoundClick}>
              Start
            </button>
          </div>
        );
      case "PUNCH_COUNTDOWN":
        return (
          <div>
            <Countdown
              date={this.state.getReadyCountdownTimer}
              renderer={({ seconds }) => <h1>{`Starting in ${seconds}`}</h1>}
              onComplete={() => {
                for (let playerName in this.state.punchPlayers) {
                  this.state.punchPlayers[playerName] = { punchAccel: 0, state: "STARTING_PUNCH" };
                }
                speakText(`Start punching!`);
                this.setState({
                  phase: "START_PUNCHING",
                  roundCountdownTimer: Date.now() + 5000,
                  punchPlayers: this.state.punchPlayers,
                });
              }}
            />
            <div className="all-shake-players">{getPunchGamePlayersComponent(this.state.punchPlayers)}</div>
          </div>
        );
      case "START_PUNCHING":
        return (
          <div>
            <Countdown
              date={this.state.roundCountdownTimer}
              renderer={countdownRenderer}
              onComplete={() => getHostSocket().emit("HOST_PUNCH_DONE")}
            />
            <div className="all-shake-players">{getPunchGamePlayersComponent(this.state.punchPlayers)}</div>
          </div>
        );
      case "SHOW_PUNCH_RESULTS":
        return (
          <div>
            <h1>{`Winner - ${this.state.gameWinner}`}</h1>
            <div className="all-shake-players">
              {getPunchGamePlayersComponent(this.state.punchPlayers, true, this.state.gamePlayersResults)}
            </div>
            <div className="button-bar">
              <button className="submit-form-button start-new-round-button" onClick={this.onStartPunchRoundClick}>
                Play Again
              </button>
              <button className="submit-form-button start-new-game-button" onClick={this.onStartNewGameNewPlayersClick}>
                Play Different Game
              </button>
            </div>
          </div>
        );
      default:
        throw new Error("Invalid Host State ", this.state.phase);
    }
  }
}

function countdownRenderer({ seconds, completed }) {
  if (completed) {
    return <h1>Finished!</h1>;
  } else if (seconds === 5) {
    return <h1>Go!</h1>;
  } else {
    return <h1>{seconds}</h1>;
  }
}

function getPunchGamePlayersComponent(players, shouldShowScore = false, finalResults = {}) {
  let connectedPlayersComponent = [];
  for (let playerName in players) {
    const player = players[playerName];
    const finalResultsPlayer = finalResults[playerName];
    let punchImgSrc = chargingPunchImage;
    if (player.state === "STOPPED_PUNCH") {
      punchImgSrc = chargingPunchImage;
    } else if (player.state === "STARTING_PUNCH") {
      punchImgSrc = completedPunchImage;
    } else if (player.state === "STARTING_STRONG_PUNCH") {
      punchImgSrc = completedStrongPunchImage;
    }
    connectedPlayersComponent.push(
      <div className="shake-player-avatar" key={playerName}>
        <div>{playerName}</div>
        {shouldShowScore && <div>{`Most powerful punch: ${finalResultsPlayer.punchAccel}`}</div>}
        <img src={punchImgSrc} className="shake-image" />
      </div>,
    );
  }
  return connectedPlayersComponent;
}

function getShakeGamePlayersComponent(players, shouldShowScore = false, finalResults = {}) {
  let connectedPlayersComponent = [];
  for (let playerName in players) {
    const shakes = players[playerName];
    const finalShakes = finalResults[playerName];
    let shakeImgSrc = holdPhoneDownImage;
    if (shakes % 2 === 1) {
      shakeImgSrc = holdPhoneUpImage;
    }
    connectedPlayersComponent.push(
      <div className="shake-player-avatar" key={playerName}>
        <div>{playerName}</div>
        {shouldShowScore && <div>{`Shakes: ${finalShakes}`}</div>}
        <img src={shakeImgSrc} className="shake-image" />
      </div>,
    );
  }
  return connectedPlayersComponent;
}

function getSpokenAnswer(answer) {
  if (answer.startsWith("data:")) {
    return "this picture";
  }
  return answer;
}

export default withRouter(HostsGame);
