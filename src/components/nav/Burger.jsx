import React, {useState} from 'react'
import Navbar from './Navbar'
import userLogo from '../../imports/img/user-logo.png'

function Burger() {
    const [hamburgerToggle, setHamburgerToggle] = useState(false);

  return (
      <div>
        <img src={userLogo} alt='user logo' className="bg-bone border-8 border-navy-blue w-20 rounded-full" onClick={()=>{setHamburgerToggle(!hamburgerToggle)}}/>
        <Navbar hamburgerToggle={hamburgerToggle}/>
      </div>
  )
}

export default Burger