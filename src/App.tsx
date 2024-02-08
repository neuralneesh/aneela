import { useState } from "react";
import "./App.css";
import Confetti from "react-confetti";
import Swal from "sweetalert2";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const [noClicked, setNoClicked] = useState(false);

  const handleYesClick = () => {
    // If "No" has been clicked, go straight to the "teehee" page.
    if (noClicked) {
      setYesPressed(true);
    } else {
      // Show the sweet alert to suggest clicking "No" for a surprise
      Swal.fire({
        title: "So quick to say yes?",
        text: "abbbaaaa you must really want me that bad ( ͡° ͜ʖ ͡°)",
        showCancelButton: true,
        confirmButtonText: "oookay oookay calm down now mr swamy",
        cancelButtonText:
          "nooo im sureee i'm head over heels for you i wouldn't ever say no",
      }).then((result) => {
        if (result.isConfirmed) {
          // If "Yes, show me!" is clicked
          Swal.fire("hmmm i wonder what else you can say");
        } else {
          // If "No, I'm sure!" is clicked
          setYesPressed(true);
        }
      });
    }
  };

  const backgroundStyle = {
    transition: "background-color 1s ease",
    backgroundColor: yesPressed
      ? "#ffcccb"
      : `rgba(255, ${255 - noCount * 20}, ${255 - noCount * 20})`,
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    setNoClicked(true); // Record that "No" has been clicked.
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "are you SURE",
      "nila PLS",
      "pretty pleaseee",
      "i was playing pls just say yes",
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
            <div className="text-container2">i'm the happiest man aliveeee</div>
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
