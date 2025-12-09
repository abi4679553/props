import React from 'react'

const Boolean = ({islogged}) => {
  return (
    <div>
        <p> islogged :{islogged ? "Yes" : "No"}</p>
    </div>
  )
}

export default Boolean