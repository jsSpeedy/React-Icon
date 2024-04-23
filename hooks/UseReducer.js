import { useEffect, useReducer } from "react";

const initialState = { number: 1, score: 1, name: "" };
function reducer(state, action) {
  if (action.type === "inc") {
    return {
      ...state,
      number: state.number + 2,
      score: state.score + 1,
    };
  }
  if (action.type === "dec") {
    return {
      number: state.number - 2,
      score: state.score - 1,
    };
  }
  if (action.type === "reset") {
    return initialState;
  }
  throw Error("Unknown action.");
}

const UseReducer = () => {
  //birden fazla useSatelerimizin olduğununu varsayalım useReducer ile bunları parçalayarak tek bir yerden yönetebiliriz.
  const [state, dispatch] = useReducer(reducer, initialState);
  const { number, score } = state;

  useEffect(() => {
    console.log("useReducer içerisi", number, score);
  }, [state.number, state.score]);

  return [state, dispatch];
};

export default UseReducer;
