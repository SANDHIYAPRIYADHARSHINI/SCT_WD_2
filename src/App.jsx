import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value); //keeps appending the value
  };
  //handle C
  const handleClear = () => {
    setInput("");
  };

  //handle DEL
  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1)); //removes the last character from the input string
  };

  //handle calculation
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); //returns the result of the evaluated expression as a string and updates the input state with it
    } catch (error) {
      setInput("Error");
    }
  };

  //handle =
  const handleEqual = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };
  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="buttons">
          <button className="btn control" onClick={handleClear}>
            C
          </button>
          <button className="btn control" onClick={handleDelete}>
            DEL
          </button>
          <button className="btn control" onClick={handleCalculate}>
            %
          </button>
          <button className="btn control" onClick={handleCalculate}>
            /
          </button>
          <button className="btn" onClick={() => handleClick("7")}>
            7
          </button>
          <button className="btn" onClick={() => handleClick("8")}>
            8
          </button>
          <button className="btn" onClick={() => handleClick("9")}>
            9
          </button>
          <button className="btn op" onClick={() => handleClick("*")}>
            x
          </button>
          <button className="btn" onClick={() => handleClick("4")}>
            4
          </button>
          <button className="btn" onClick={() => handleClick("5")}>
            5
          </button>
          <button className="btn" onClick={() => handleClick("6")}>
            6
          </button>
          <button className="btn op" onClick={() => handleClick("-")}>
            -
          </button>
          <button className="btn" onClick={() => handleClick("1")}>
            1
          </button>
          <button className="btn" onClick={() => handleClick("2")}>
            2
          </button>
          <button className="btn" onClick={() => handleClick("3")}>
            3
          </button>
          <button className="btn op" onClick={() => handleClick("+")}>
            +
          </button>
          <button className="btn zero" onClick={() => handleClick("0")}>
            0
          </button>
          <button className="btn" onClick={() => handleClick(".")}>
            .
          </button>
          <button className="btn equal" onClick={handleEqual}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
