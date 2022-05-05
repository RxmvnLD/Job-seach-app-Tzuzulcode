import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


function SortBy() {
const [sortMode, setSortMode] = useState("Sort by")

  return (
    <div>
        <div>{sortMode} <FontAwesomeIcon icon={solid('caret-down')}/></div>
    </div>
  )
}

export default SortBy