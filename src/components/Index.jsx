import React from 'react'
import JobCard from './JobCard.'
import SortBy from './SortBy'
import Sidebar from './user_sidebar/Sidebar'
function Index() {

  return (
    <div className=''>
        <Sidebar/>
        <div className='flex justify-end'>
        <SortBy/>
        </div>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
    </div>
  )
}

export default Index