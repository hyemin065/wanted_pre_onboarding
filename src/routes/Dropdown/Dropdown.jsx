import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from './Dropdown.module.scss'

function Dropdown() {
  const dropdownItems = ['BTCUSD.PERP', 'ETHUSD.PERP', 'BCHUSD.PERP', 'LTCUSD.PERP', 'XRPUSD.PERP', '1000SHIBUSD.PERP']

  const [dropdownInitialItem, setDropdownInitialItem] = useState('All Symbols')
  const [dropdownItemList, setDropdownItemList] = useState(dropdownItems)
  const [dropdownState, setDropdownState] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const closeRef = useRef()

  // dropdown 클릭시
  const clickDropdownHandler = () => {
    setDropdownState(!dropdownState)
    setDropdownItemList(['All Symbols', ...dropdownItems])
    setSearchValue('')
  }

  const changeItemHandler = (selectItem) => {
    setDropdownInitialItem(selectItem)
    setDropdownState(false)
    setSearchValue('')
  }

  // search
  const searchItemHandler = (e) => {
    const { value } = e.target
    setSearchValue(value)

    const searchItemList = dropdownItems.filter((item) => {
      return item.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    })

    setDropdownItemList(['All Symbols', ...searchItemList])
  }

  function closeHandler(e) {
    if (closeRef.current && !closeRef.current.contains(e.target)) {
      setDropdownState(false)
      setDropdownItemList(dropdownItems)
    }
  }

  // dropdown 외부영역 클릭 시
  useEffect(() => {
    document.addEventListener('mousedown', closeHandler)
    return () => {
      document.removeEventListener('mousedown', closeHandler)
    }
  }, [closeRef])

  return (
    <section className={styles.dropdownArea} ref={closeRef}>
      <button type='button' className={styles.dropdownButton} onClick={clickDropdownHandler}>
        {dropdownInitialItem}
        <FontAwesomeIcon icon={faCaretDown} className={styles.arrow} />
      </button>
      {dropdownState && (
        <div className={styles.dropdownContents}>
          <div className={styles.inputArea}>
            <input type='text' placeholder='Search Symbol' value={searchValue} onChange={searchItemHandler} />
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.search} />
          </div>
          <ul className={styles.dropdown}>
            {dropdownItemList.map((item, index) => {
              return (
                <li key={`item-${index}`}>
                  <button type='button' onClick={() => changeItemHandler(item)}>
                    {item}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </section>
  )
}

export default Dropdown
