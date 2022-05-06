import React from 'react'
import StartButton from "../components/StartButton";
import workingLogo from "../imports/img/working-logo.png";
import {Link} from 'react-router-dom' 

function Welcome() {
  return (
    <div className="App font-mono  h-screen">
      <header className="container text-center">
        <img src={workingLogo} alt="Logo" className="max-h-96" />
        <h1 className="text-3xl font-bold">Climb higher with JobSeek app</h1>
        <Link to="/index">{<StartButton/>}</Link>
      </header>
    </div>
  )
}

export default Welcome