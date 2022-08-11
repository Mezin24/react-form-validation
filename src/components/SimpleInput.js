import { useState, useRef } from 'react';
const SimpleInput = (props) => {
  const [nameInputValue, setNameInputValue] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isNameInputTouched, setIsNameInputTouched] = useState(false);

  const nameInput = useRef();

  const inputChangeHandler = (event) => {
    setNameInputValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setIsNameInputTouched(true);

    if (nameInputValue.trim() === '') {
      setIsFormValid(false);
      return;
    }

    setIsFormValid(true);
    console.log(nameInputValue);
    const nameEnteredValue = nameInput.current.value;
    console.log(nameEnteredValue);
    setNameInputValue('');
  };

  const isInputInvalid = isNameInputTouched && !isFormValid;
  const formClasses = `form-control ${!isInputInvalid ? '' : 'invalid'}`;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          ref={nameInput}
          onChange={inputChangeHandler}
          value={nameInputValue}
        />
      </div>
      {isInputInvalid && <p className='error-text'>Name must have letters</p>}
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
