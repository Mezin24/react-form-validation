import { useReducer } from 'react';

const initalState = {
  inputValue: '',
  isTouched: false,
};

const inputReduce = (state, action) => {
  if (action.type === 'INPUT') {
    return { inputValue: action.inputValue, isTouched: state.isTouched };
  }

  if (action.type === 'BLUR') {
    return { inputValue: state.inputValue, isTouched: true };
  }

  if (action.type === 'RESET') {
    return { inputValue: '', isTouched: false };
  }

  return initalState;
};

const useInput = (validateInput) => {
  const [inputState, dispatchInput] = useReducer(inputReduce, initalState);

  const hasError = validateInput(inputState.inputValue);
  const isInputInvalid = inputState.isTouched && hasError;

  const cnangeValueHandler = (event) => {
    dispatchInput({ type: 'INPUT', inputValue: event.target.value });
  };

  const blurHandler = () => {
    dispatchInput({ type: 'BLUR' });
  };

  const reset = () => {
    dispatchInput({ type: 'RESET' });
  };

  return {
    inputValue: inputState.inputValue,
    hasError,
    isInputInvalid,
    cnangeValueHandler,
    blurHandler,
    reset,
  };
};

export default useInput;
