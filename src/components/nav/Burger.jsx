import React, {useState} from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro'

function Burger() {
    const [hamburgerToggle, setHamburgerToggle] = useState(false);

  return (
      <>
      <div className="bg-dark-blue dark:bg-bone rounded-full w-fit">
      <FontAwesomeIcon  className="text-black w-4 h-4" icon={solid('user')}onClick={()=>{setHamburgerToggle(!hamburgerToggle)}}/>
      </div>
        <Navbar hamburgerToggle={hamburgerToggle}/>
      </>
  )
}

export default Burger