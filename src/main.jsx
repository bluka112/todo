import { createRoot } from "react-dom/client";
import "./index.css";
import TodoApp from "./todo";

import { StrictMode, useState } from "react";
function Calculator() {
  const [too1, setToo1] = useState("");
  const [too2, setToo2] = useState("");
  const [answer, setAnswer] = useState("");
  return (
    <div>
      <div>
        <label>
          too 1{" "}
          <input
            type="text"
            value={too1}
            onChange={(e) => {
              setToo1(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          too 2{" "}
          <input
            type="text"
            value={too2}
            onChange={(e) => {
              setToo2(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          answer <input type="text" value={answer} />
        </label>
      </div>
      <button
        onClick={() => {
          setAnswer(Number(too1) + Number(too2));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setAnswer(Number(too1) - Number(too2));
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setAnswer(Number(too1) * Number(too2));
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          setAnswer(Number(too1) / Number(too2));
        }}
      >
        /
      </button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Calculator />
  </StrictMode>,
);
