import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='relative h-full shrink-0 overflow-hidden w-80 rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />

       <Rightcardcontent id={props.id} tag={props.tag} color={props.color}/>

    </div>
  )
}

export default Rightcard