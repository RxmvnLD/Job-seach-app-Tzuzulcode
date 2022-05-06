import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


function SortBy() {
const [sortMode, setSortMode] = useState("Sort by")

  return (
    <>
        <div className='m-5'>
            Sort by <FontAwesomeIcon icon={solid('caret-down')}/>
        </div>
    </>
  )
}

export default SortBy