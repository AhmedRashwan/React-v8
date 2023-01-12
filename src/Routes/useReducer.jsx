import React, { useReducer } from "react";

const limit100 = (num, max) => (num < 0 ? 0 : num > max ? max : num);
const step = 20;

function getStateObject(state, action) {
  const states = {
    INCREMENT_H: Object.assign({}, state, {
      h: (state.h + step) % 360,
    }),
    DECREMENT_H: Object.assign({}, state, {
      h: (state.h - step) % 360,
    }),
    INCREMENT_S: Object.assign({}, state, {
      s: limit100(state.s + step, 100),
    }),
    DECREMENT_S: Object.assign({}, state, {
      s: limit100(state.s - step, 100),
    }),
    INCREMENT_L: Object.assign({}, state, {
      l: limit100(state.l + step, 100),
    }),
    DECREMENT_L: Object.assign({}, state, {
      l: limit100(state.l - step, 100),
    }),
  };
  return states[action.type] ?? null;
}
const reducer = (state, action) => {
  return getStateObject(state, action);
};

const UseReducerComponent = () => {
  const [{ h, s, l }, dispatch] = useReducer(reducer, {
    h: 50,
    s: 50,
    l: 50,
  });

  return (
    <div className="page use-reducer">
      <p
        className="readable-banner"
        style={{
          color: `hsl(${(h + 180) % 360}, ${s}%, ${(l + 50) % 100}%)`,
          backgroundColor: `hsl(${h}, ${s}%, ${l}%)`,
        }}
      >
        This text should always be pretty close to readable
      </p>
      <div className="btn-groups">
        <div className="btn-group">
          <span className="btn-label">Hue</span>
          <button onClick={() => dispatch({ type: "INCREMENT_H" })}>➕</button>
          <button onClick={() => dispatch({ type: "DECREMENT_H" })}>➖</button>
        </div>
        <div className="btn-group">
          <span className="btn-label">Saturation</span>
          <button onClick={() => dispatch({ type: "INCREMENT_S" })}>➕</button>
          <button onClick={() => dispatch({ type: "DECREMENT_S" })}>➖</button>
        </div>
        <div className="btn-group">
          <span className="btn-label">Lightness</span>
          <button onClick={() => dispatch({ type: "INCREMENT_L" })}>➕</button>
          <button onClick={() => dispatch({ type: "DECREMENT_L" })}>➖</button>
        </div>
      </div>
    </div>
  );
};

export default UseReducerComponent;
