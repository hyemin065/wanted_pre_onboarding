import { useState } from 'react'
import styles from './Tab.module.scss'

function Tab() {
  const tabData = ['감자', '고구마', '카레라이스']
  const [tabInitialData, setTabInitialData] = useState('감자')

  // tab 클릭시
  const clickHandler = (selectTab) => {
    setTabInitialData(selectTab)
  }

  function ActiveBarHandler() {
    if (tabInitialData === '감자') {
      return '0'
    }
    if (tabInitialData === '고구마') {
      return '33%'
    }
    if (tabInitialData === '카레라이스') {
      return '66%'
    }
    return null
  }

  return (
    <div className={styles.tabArea}>
      <span
        className={styles.active}
        style={{
          left: ActiveBarHandler(tabData),
        }}
      />
      <ul className={styles.tab} tab={tabInitialData}>
        {tabData.map((data, index) => {
          return (
            <li key={`tab-${index}`}>
              <button
                type='button'
                onClick={() => clickHandler(data)}
                className={tabInitialData === data ? styles.on : ''}
              >
                {data}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Tab
