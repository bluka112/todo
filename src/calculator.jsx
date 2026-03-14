import { useState } from "react";

export default function Calculator() {
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
      <button>-</button>
      <button>*</button>
      <button>/</button>
    </div>
  );
}
