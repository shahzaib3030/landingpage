import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
<div className='flex-1 min-h-0 pb-16 pt-6 flex gap-10 items-start px-10'>
      <LeftContent />
      <RightContent  users={props.users}/>
    </div>
  )
}

export default Page1Content
