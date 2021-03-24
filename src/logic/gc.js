import { useState } from "react";

// global controller
export const _gc = {};

// custom hook
export const useCustomHook = (init, name) => {
  const [state, setState] = useState(init);

  if (!_gc[name]) {
    _gc[name] = {
      cards: [],
      state,
      dispatch: setState,
    };
  }

  return [state, setState];
};
