import { useState } from "react";
import "./Cipher.css";

const Cipher = (props) => {
  console.log("Fucking cheater");
  const [correct, setCorrect] = useState(false);
  const [submitted, setSubmitted] = useState(false)
  const [secretButtonClicked, setSecretButtonClicked] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    const acceptedValues = new Set(["swiggityswooty", "swiggity swooty", "swiggity-swooty"])
    let submittedVal = e.target[0].value;
    setSubmitted(true)
    if(acceptedValues.has(submittedVal.toLowerCase())) {
        console.log("got here")
        setCorrect(true)
    } else {
        setCorrect(false)
    }
  };
  return (
    <div className="cipher-container">
      <h1>43 52 24 22 22 24 44 54 43 52 34 34 44 54</h1>
      <form onSubmit={handleSubmit}>
        <p>{submitted && !correct ? "Stop being a hoe" : "Press enter on your keyboard to submit"}</p>
        <input type="text" />
      </form>
      <button className="secret-button">secret button!</button>
    </div>
  );
};

export default Cipher;
