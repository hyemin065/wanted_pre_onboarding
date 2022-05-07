import { useState } from 'react'
import styles from './Slider.module.scss'

function Slider() {
  const percentRange = [1, 25, 50, 75, 100]
  const [rangeValue, setRangeValue] = useState(20)

  const changeValueHandler = (e) => {
    const { value } = e.target
    setRangeValue(value)
  }

  const clickValueHandler = (value) => {
    setRangeValue(value)
  }

  return (
    <section className={styles.sliderArea}>
      <div className={styles.range}>
        <p>{rangeValue}</p>
        <span>%</span>
      </div>
      <div className={styles.rangeBar}>
        <div>
          {percentRange.map((item, index) => {
            return (
              <span
                key={`range-${index}`}
                style={{
                  left: `calc(${item}% - 1%)`,
                  backgroundColor: `${rangeValue < item ? 'rgba(223, 212, 243, 1)' : 'blueviolet'}`,
                }}
              />
            )
          })}
        </div>
        <input type='range' min='1' max='100' step='1' value={rangeValue} onChange={changeValueHandler} />
      </div>
      <div className={styles.buttonArea}>
        {percentRange.map((item, index) => {
          return (
            <button type='button' key={`percent-${index}`} onClick={() => clickValueHandler(item)}>{`${item}%`}</button>
          )
        })}
      </div>
    </section>
  )
}

export default Slider
