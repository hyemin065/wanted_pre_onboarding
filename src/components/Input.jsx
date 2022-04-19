import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const InputArea = styled.div`
  width: 400px;
  margin-bottom: 100px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  label {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

const InputGroup = styled.div`
  width: 100%;
  right: 0;
  position: relative;
  input {
    width: 100%;
    height: 40px;
    border: 1px solid #878787;
    border-radius: 5px;
    padding: 5px 20px;
  }

  .icon {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 20px;
    cursor: pointer;
  }
`;

const ErrorMessage = styled.span`
  display: block;
  color: red;
`;

const Input = () => {
  const emailRegExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailCheck, setEmailCheck] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState(false);

  const checkEmailHandler = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (emailRegExp.test(value)) {
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
    if (e.target.value === '') {
      setEmailError('');
    }
  };

  const errorEmailHandler = (e) => {
    if (emailCheck) {
      setEmailError('');
    } else {
      if (e.target.value === '') {
        setEmailError('');
      } else {
        setEmailError('invalid e-mail address');
      }
    }
  };

  const changePasswordHandler = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const checkPasswordHandler = () => {
    setPasswordCheck(!passwordCheck);
  };

  return (
    <InputArea>
      <FormGroup>
        <label htmlFor="">E-mail</label>
        <InputGroup>
          <input
            type="email"
            value={email}
            onChange={checkEmailHandler}
            onBlur={errorEmailHandler}
            placeholder="E-mail"
          />
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="icon"
            style={{ color: `${emailCheck ? 'blueviolet' : ''}` }}
          />
        </InputGroup>
        <ErrorMessage>{emailError}</ErrorMessage>
      </FormGroup>
      <FormGroup>
        <label htmlFor="">Password</label>
        <InputGroup>
          <input
            type={passwordCheck ? 'text' : 'password'}
            value={password}
            onChange={changePasswordHandler}
            placeholder="Password"
          />
          <FontAwesomeIcon
            icon={passwordCheck ? faEye : faEyeSlash}
            className="icon"
            onClick={checkPasswordHandler}
            style={{ color: `${passwordCheck ? 'blueviolet' : ''}` }}
          />
        </InputGroup>
      </FormGroup>
    </InputArea>
  );
};

export default Input;
