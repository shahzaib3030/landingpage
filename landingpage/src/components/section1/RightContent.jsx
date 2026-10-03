import React from 'react'
import RightCard from './RightCard'
import RightCardContent from './RightCardContent'

const RightContent = (props) => {
    console.log(props)
  return (
    <div id='right' className='h-full w-2/3 flex flex-nowrap gap-5 overflow-x-auto rounded-4xl'>

    {props.users.map(function(elem,idx){

        return <RightCard key={idx} id={idx} img ={elem.img} tag={elem.tag} color={elem.color}/>
    })}
       
    </div>
  )
}

export default RightContent
