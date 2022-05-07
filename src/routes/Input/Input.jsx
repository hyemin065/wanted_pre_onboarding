import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import styles from './Input.module.scss'

function Input() {
  const emailRegExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [emailCheck, setEmailCheck] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState(false)

  const checkEmailHandler = (e) => {
    const { value } = e.target
    setEmail(value)
    if (emailRegExp.test(value)) {
      setEmailCheck(true)
    } else {
      setEmailCheck(false)
    }
    if (e.target.value === '') {
      setEmailError('')
    }
  }

  const errorEmailHandler = (e) => {
    if (emailCheck) {
      setEmailError('')
    } else if (e.target.value === '') {
      setEmailError('')
    } else {
      setEmailError('invalid e-mail address')
    }
  }

  const changePasswordHandler = (e) => {
    const { value } = e.target
    setPassword(value)
  }

  const checkPasswordHandler = () => {
    setPasswordCheck(!passwordCheck)
  }

  return (
    <section className={styles.inputArea}>
      <div className={styles.FormGroup}>
        <label htmlFor='email'>E-mail</label>
        <div className={styles.inputGroup}>
          <input
            type='email'
            value={email}
            onChange={checkEmailHandler}
            onBlur={errorEmailHandler}
            placeholder='E-mail'
            id='email'
          />
          <FontAwesomeIcon
            icon={faCircleCheck}
            className={styles.icon}
            style={{ color: `${emailCheck ? 'blueviolet' : ''}` }}
          />
        </div>
        <span className={styles.errorMessage}>{emailError}</span>
      </div>
      <div className={styles.FormGroup}>
        <label htmlFor='password'>Password</label>
        <div className={styles.inputGroup}>
          <input
            type={passwordCheck ? 'text' : 'password'}
            value={password}
            onChange={changePasswordHandler}
            placeholder='Password'
            id='password'
          />
          <FontAwesomeIcon
            icon={passwordCheck ? faEye : faEyeSlash}
            className={styles.icon}
            onClick={checkPasswordHandler}
            style={{ color: `${passwordCheck ? 'blueviolet' : ''}` }}
          />
        </div>
      </div>
    </section>
  )
}

export default Input
