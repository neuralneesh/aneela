import { useState } from "react";
import "./App.css";
import Confetti from "react-confetti";
import SweetAlert from "react-sweet-alert";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const handleYesClick = () => {
    SweetAlert({
      title: "So quick to say yes?",
      text: "There's a little surprise if you click 'No'... just saying! Want to see what it is before deciding?",
      icon: "info",
      buttons: ["No, I'm sure!", "Yes, show me!"],
    }).then((isCurious) => {
      if (!isCurious) {
        setYesPressed(true);
      }
    });
  };
  const backgroundStyle = {
    transition: "background-color 1s ease",
    backgroundColor: yesPressed
      ? "#ffcccb"
      : `rgba(255, ${255 - noCount * 20}, ${255 - noCount * 20})`,
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "are you SURE",
      "nila PLS",
      "pretty pleaseee",
      "why must you do this to me",
      "i'm gonna cry :((((",
      "say YES >:( ",
      "You might regret this!",
      "Give it another thought!",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Wouldn't you reconsider?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div style={backgroundStyle} className="centered-container">
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media1.tenor.com/m/gRnRdgBucm8AAAAC/puuung-kiss-puuung.gif" />
            <div className="text-container">teeeheeee yayyyy</div>
            <Confetti />
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://media1.tenor.com/m/Hn7XjS73FXEAAAAC/puuung-love.gif
              "
            />
            <h1 className="text-container">will you be my valentine?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={handleYesClick} // Updated to use the new handler
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
