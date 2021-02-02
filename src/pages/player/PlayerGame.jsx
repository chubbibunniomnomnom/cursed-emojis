import React, { Component } from "react";
import { withRouter } from "react-router";
import { getPlayerSocket } from "../../SocketIoConnection";
import "./PlayerGame.css";
import holdPhoneDownImage from "../../images/hold-phone-down.png";
import holdPhoneMidImage from "../../images/hold-phone-mid.png";
import holdPhoneUpImage from "../../images/hold-phone-up.png";
import chargingPunchImage from "../../images/starting-punch.png";
import completedPunchImage from "../../images/completed-punch.png";
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


class PlayerGame extends Component {
  state = { phase: "WAITING_TO_START", answer: "" };
  // state = {
  //   phase: "START_SHAKING",
  //   shakes: 0,
  //   yAccel: 0,
  // };
  // Test state
  // state = {
  //   phase: "STARTED",
  //   promptsToAnswer: [
  //     "The most <i>horrific</i> way to start your day",
  //     "You are having a stroll in the park, only to see BLANK",
  //   ],
  //   currentPromptNumber: 0,
  // };

  constructor(props) {
    super(props);
    this.handleSubmitAnswerClick = this.handleSubmitAnswerClick.bind(this);
    this.handleSubmitVoteClick = this.handleSubmitVoteClick.bind(this);
    this.handleSubmitVoteClick = this.handleSubmitVoteClick.bind(this);
    this.onAnswerChange = this.onAnswerChange.bind(this);
    this.onPictureTaken = this.onPictureTaken.bind(this);
    this.handleMotion = this.handleMotion.bind(this);
    this.takePictureInputRef = React.createRef();
    this.takeSelfieInputRef = React.createRef();
    window.addEventListener("devicemotion", this.handleMotion);
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

  componentDidMount() {
    const socket = getPlayerSocket();
    if (!socket) {
      // For easier local debugging with live-reload changes
      this.props.history.push("/");
      return;
    }
    socket.on("PLAYER_DISCONNECTED", (playerName) => {
      alert(`${playerName} has disconnected from the game.  Please join a new game to keep playing.`);
      this.props.history.push("/");
    });
    socket.on("START_GAME", (promptsToAnswer, roomOptions) =>
      this.setState({ phase: "STARTED", promptsToAnswer, currentPromptNumber: 0, roomOptions }),
    );
    socket.on("START_VOTING_PHASE", (onePromptAndAnswers) =>
      this.setState({
        phase: "VOTING",
        prompt: onePromptAndAnswers.prompt,
        votingOptions: onePromptAndAnswers.answers,
      }),
    );
    socket.on("WAIT_FOR_VOTES_ON_YOUR_PROMPT", () => this.setState({ phase: "WAIT_FOR_VOTES_ON_YOUR_PROMPT" }));
    socket.on("SHOW_PUNCH_INSTRUCTIONS", () => this.setState({ gameMode: "PUNCH" }));
    socket.on("START_PUNCHING", () => this.setState({ phase: "START_PUNCHING", shakes: 0 }));
    socket.on("SHOW_PUNCH_RESULTS", () => this.setState({ phase: "WAITING_FOR_NEXT_ROUND", yAccel: 0, shakes: 0 }));
    socket.on("SHOW_SHAKE_INSTRUCTIONS", () => this.setState({ gameMode: "SHAKE" }));
    socket.on("START_SHAKING", () => this.setState({ phase: "START_SHAKING", shakes: 0 }));
    socket.on("SHOW_SHAKE_RESULTS", () => this.setState({ phase: "WAITING_FOR_NEXT_ROUND", yAccel: 0, shakes: 0 }));
  }

  handleSubmitAnswerClick(e) {
    e.preventDefault(); // To prevent page reload on form submit
    if (this.state.answer) {
      getPlayerSocket().emit("SUBMIT_ANSWER", {
        prompt: this.state.promptsToAnswer[this.state.currentPromptNumber],
        answer: this.state.answer,
      });
      if (this.state.currentPromptNumber >= 1) {
        this.setState({ answer: "", phase: "SUBMITTED_ANSWER" });
      } else {
        this.setState({ answer: "", currentPromptNumber: 1 });
      }
    }
  }

  handleSubmitVoteClick(answerVotedFor) {
    getPlayerSocket().emit("SUBMIT_VOTE", { prompt: this.state.prompt, answerVotedFor });
    this.setState({ phase: "WAITING_FOR_NEXT_ROUND" });
  }

  onAnswerChange(event) {
    this.setState({ answer: event.target.value });
  }

  onPictureTaken(event) {
    const picture = event.target.files[0];
    if (picture) {
      const reader = new FileReader();
      reader.onload = () => {
        getPlayerSocket().emit("SUBMIT_ANSWER", {
          prompt: this.state.promptsToAnswer[this.state.currentPromptNumber],
          answer: reader.result,
        });
        if (this.state.currentPromptNumber >= 1) {
          this.setState({ answer: "", phase: "SUBMITTED_ANSWER" });
        } else {
          this.setState({ answer: "", currentPromptNumber: 1 });
        }
      };
      reader.readAsDataURL(picture);
    }
  }

  render() {
    switch (this.state.phase) {
      case "STARTED":
        return (
          <form onSubmit={this.handleSubmitAnswerClick}>
            <div>
              <h1>come up with a caption or scenario for the followiong emoji:</h1>
              <img className="photo" src={this.promptToImage(this.state.promptsToAnswer[this.state.currentPromptNumber])} />
              <input
                className="answer-input"
                type="text"
                placeholder="Answer Here"
                value={this.state.answer}
                onChange={this.onAnswerChange}
              />
              <br />
            </div>
            <button className="player-submit-button" type="submit">
              Submit Answer
            </button>
            {this.state.roomOptions.allowPictureUploads && (
              <div style={{ display: this.state.roomOptions.allowPictureUploads ? "block" : "none" }}>
                <div>or</div>
                <button className="player-submit-button" onClick={() => this.takePictureInputRef.current.click()}>
                  Take a picture
                </button>
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={this.onPictureTaken}
                  ref={this.takePictureInputRef}
                  style={{ display: "none" }}
                />
                <div>or</div>
                <button className="player-submit-button" onClick={() => this.takeSelfieInputRef.current.click()}>
                  Take a selfie
                </button>
                <input
                  type="file"
                  accept="image/*"
                  capture="user"
                  onChange={this.onPictureTaken}
                  ref={this.takeSelfieInputRef}
                  style={{ display: "none" }}
                />
              </div>
            )}
          </form>
        );
      case "SUBMITTED_ANSWER":
        return <h1>Waiting for other players to submit their responses...</h1>;
      case "VOTING":
        let answersCount = 0;
        return (
          <div>
            {/*<img src={this.promptToImage(this.state.promptsToAnswer[this.state.currentPromptNumber])} />*/}
            {/*<img src={this.promptToImage(this.state.prompt)} />*/}
            <h2>  </h2>
            <h2>Which one do you like more?</h2>
            <h2>  </h2>
            {this.state.votingOptions.map((voteOption) => {
              let buttonText = voteOption;
              if (voteOption.startsWith("data:")) {
                if (answersCount === 0) {
                  buttonText = "The left picture";
                } else {
                  buttonText = "The right picture";
                }
              }
              answersCount++;
              return (
                <button className="player-submit-button" onClick={() => this.handleSubmitVoteClick(voteOption)}>
                  {buttonText}
                </button>
              );
            })}
          </div>
        );
      case "WAITING_TO_START":
        return <h1>Waiting for game to start...</h1>;
      case "WAITING_FOR_NEXT_ROUND":
        return <h1>See the results on the host screen</h1>;
      case "WAIT_FOR_VOTES_ON_YOUR_PROMPT":
        return <h1>See others vote for your answer on the host screen</h1>;
      case "START_PUNCHING":
        let punchImgSrc;
        if (this.state.xAccel > 0) {
          punchImgSrc = completedPunchImage;
        } else {
          punchImgSrc = chargingPunchImage;
        }
        return (
          <div>
            <h1>Start Punching!</h1>
            <img src={punchImgSrc} className="shake-image" />
            <div>{`Speed: ${this.state.xAccel}`}</div>
          </div>
        );
      case "START_SHAKING":
        let imgSrc;
        if (this.state.yAccel > 0) {
          imgSrc = holdPhoneUpImage;
        } else if (this.state.yAccel < 0) {
          imgSrc = holdPhoneDownImage;
        } else {
          imgSrc = holdPhoneMidImage;
        }
        let speedText = "Stopped";
        const absSpeed = Math.abs(this.state.yAccel);
        if (absSpeed > 10) {
          speedText = "Too fast to read!";
        } else if (absSpeed > 5) {
          speedText = "So Fast";
        } else if (absSpeed > 3) {
          speedText = "Fast";
        } else if (absSpeed >= 1) {
          speedText = "Slow";
        }
        return (
          <div>
            <h1>Start Shaking!</h1>
            <img src={imgSrc} className="shake-image" />
            <div>{`Speed: ${speedText}`}</div>
          </div>
        );
      default:
        throw new Error("Invalid Player State ", this.state.phase);
    }
  }

  handleMotion(event) {
    event.preventDefault();
    if (this.state.gameMode === "PUNCH") {
      const currentAccel = Math.round(event.acceleration.x);
      const previousAccel = Math.round(this.state.xAccel);
      if (currentAccel >= 2 && previousAccel < 2) {
        // Started punching
        getPlayerSocket().emit("STARTING_PUNCH", previousAccel);
      } else if (currentAccel >= 5) {
        // Strong punch
        getPlayerSocket().emit("STARTING_PUNCH", previousAccel);
      } else if (currentAccel <= 0 && previousAccel > 0) {
        // Stopped punching
        getPlayerSocket().emit("STOPPED_PUNCH");
      }
      this.setState({
        xAccel: currentAccel,
      });
    } else if (this.state.gameMode === "SHAKE") {
      const currentAccel = Math.round(event.acceleration.y);
      const previousYAccel = Math.round(this.state.yAccel);
      let shakes = this.state.shakes;
      if ((previousYAccel > 0 && currentAccel < 0) || (previousYAccel < 0 && currentAccel > 0)) {
        shakes++;
        getPlayerSocket().emit("SHAKE_COUNT_UP");
      }
      this.setState({
        yAccel: currentAccel,
        shakes,
      });
    }
  }
}

export default withRouter(PlayerGame);
