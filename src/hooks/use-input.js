import { useState } from 'react';

const useInput = (validateInput) => {
  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const hasError = validateInput(inputValue);
  const isInputInvalid = isTouched && hasError;

  const cnangeValueHandler = (event) => {
    setInputValue(event.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setInputValue('');
    setIsTouched(false);
  };

  return {
    inputValue,
    hasError,
    isInputInvalid,
    cnangeValueHandler,
    blurHandler,
    reset,
  };
};

export default useInput;
