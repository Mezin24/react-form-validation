import { useRef } from 'react';
import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const nameInputRef = useRef();

  const {
    inputValue: nameInputValue,
    hasError: hasNameError,
    isInputInvalid: isNameInputInvalid,
    cnangeValueHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() === '');

  const {
    inputValue: lastNameInputValue,
    hasError: hasLastNameError,
    isInputInvalid: isLastNameInputInvalid,
    cnangeValueHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() === '');

  const {
    inputValue: emailInputValue,
    hasError: hasEmailError,
    isInputInvalid: isEmailInputInvalid,
    cnangeValueHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => !value.includes('@'));

  const setClasses = (isValid) => `form-control ${isValid ? 'invalid' : ''}`;

  let isFormValid = false;

  if (!hasNameError && !hasLastNameError && !hasEmailError) {
    isFormValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }
    console.log(nameInputValue);
    console.log(lastNameInputValue);
    console.log(emailInputValue);
    nameReset();
    lastNameReset();
    emailReset();
    nameInputRef.current.focus();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={setClasses(isNameInputInvalid)}>
          <label htmlFor='name'>First Name</label>
          <input
            ref={nameInputRef}
            type='text'
            id='name'
            onChange={nameChangeHandler}
            value={nameInputValue}
            onBlur={nameBlurHandler}
          />
          {isNameInputInvalid && (
            <p className='error-text'>Name must have letters</p>
          )}
        </div>
        <div className={setClasses(isLastNameInputInvalid)}>
          <label htmlFor='lastname'>Last Name</label>
          <input
            type='text'
            id='lastname'
            onChange={lastNameChangeHandler}
            value={lastNameInputValue}
            onBlur={lastNameBlurHandler}
          />
          {isLastNameInputInvalid && (
            <p className='error-text'>Last Name must have letters</p>
          )}
        </div>
      </div>
      <div className={setClasses(isEmailInputInvalid)}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='text'
          id='email'
          onChange={emailChangeHandler}
          value={emailInputValue}
          onBlur={emailBlurHandler}
        />
        {isEmailInputInvalid && <p className='error-text'>Enter valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
