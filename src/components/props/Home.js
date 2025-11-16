import React from 'react'
import About from './Array'
import Boolean from './Boolean'
import Number from './Number'
import String from './String'



const Home = () => {
  return (
    <div>
  
      <String name={"abi"} />
      <Number age={'20'} />
      <Boolean Boolean={true} />
      

    </div>
  )
}

export default Home