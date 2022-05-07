import { useState } from 'react'
import styles from './Toggle.module.scss'

function Toggle() {
  const [toggleState, setToggleState] = useState(true)

  // toggle 상태변경
  const toggleHandler = () => {
    setToggleState((prev) => !prev)
  }

  return (
    <button type='button' className={`${styles.toggleArea} ${toggleState ? styles.on : ''}`} onClick={toggleHandler}>
      <div className={styles.toggleCircle} style={{ left: toggleState ? '1%' : '50%' }} />
      <span className={styles.default}>기본</span>
      <span className={styles.detail}>상세</span>
    </button>
  )
}

export default Toggle
