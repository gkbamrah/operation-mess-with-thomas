import { useState } from "react";
import "./Cipher.css";
import Decoder from "../images/decoder.png";
import Meme from "../images/meme.png";
import Meme2 from "../images/meme2.png";

const Cipher = (props) => {
  console.log("Fucking cheater");
  const [correct, setCorrect] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [secretButtonClicked, setSecretButtonClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const acceptedValues = new Set([
      "swiggityswooty",
      "swiggity swooty",
      "swiggity-swooty",
    ]);
    let submittedVal = e.target[0].value;
    setSubmitted(true);
    if (acceptedValues.has(submittedVal.toLowerCase())) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  };

  const handleOnClick = () => {
    setSecretButtonClicked(true);
  };

  return (
    <div className="cipher-container">
      {correct ? (
        <div className="correct-container">
          <div className="meme-container">
            <img src={Meme} />
            <img src={Meme2} />
          </div>
          <p>Send Elektra the result of the cipher</p>
        </div>
      ) : (
        <>
          <h1>43 52 24 22 22 24 44 54 43 52 34 34 44 54</h1>
          <form onSubmit={handleSubmit}>
            <p>
              {submitted && !correct
                ? "Stop being a hoe"
                : "Press enter on your keyboard to submit"}
            </p>
            <input type="text" />
          </form>
          <button
            className="secret-button"
            tabIndex={-1}
            onClick={handleOnClick}
          >
            secret button!
          </button>
          {secretButtonClicked ? <img src={Decoder} /> : null}
        </>
      )}
    </div>
  );
};

export default Cipher;
