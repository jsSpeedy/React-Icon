import { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import Simple from "../components/Simple";
import UseReducer from "../hooks/UseReducer";
import UseEffect from "../hooks/UseEffect";
import UseRef from "../hooks/UseRef";
import UseState from "../hooks/UseState";

export default function Hooks() {
  const [count, setCount] = UseState(1);
  const [stateIndex, setStateIndex] = UseEffect(1);
  const [inputRef, handleClick] = UseRef();
  const [stateCounter, dispatch] = UseReducer();
  const { number, score } = stateCounter;

  return (
    <Layout title="Hooks">
      <h4>useState</h4>
      <p>{count}</p>
      <button
        // Bu yazım daha stabil çalıştırıyor.
        onClick={() =>
          setCount((prevCount) => {
            return prevCount + 1;
          })
        }
      >
        Ekle Count
      </button>

      <hr />

      <h4>useEffect</h4>
      <p>{stateIndex}</p>
      <button onClick={() => setStateIndex(stateIndex + 1)}>Ekle Index</button>
      {stateIndex % 2 === 0 && <Simple />}

      <hr />

      <h4>useRef</h4>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>

      <hr />

      <h4>useReducer</h4>
      <p>Number: {number}</p>
      <button onClick={() => dispatch({ type: "inc" })}>Ekle</button>
      <button onClick={() => dispatch({ type: "dec" })}>Çıkar</button>
      <button onClick={() => dispatch({ type: "reset" })}>Sıfırla</button>
      <p>Score: {score}</p>
    </Layout>
  );
}
