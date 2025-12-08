import React from 'react'

const Boolean = ({islogged}) => {
  return (
    <div className='text-xl'>
        <p> islogged :{islogged ? "Yes" : "No"}</p>
    </div>
  )
}

export default Boolean