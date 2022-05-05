import React, {useState} from 'react'
import JobCard from './JobCard.'
import Burger from './nav/Burger'
import SortBy from './SortBy'
function Index() {

  return (
    <div className="dark:text-white">
        <Burger/>
        <SortBy/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
    </div>
  )
}

export default Index