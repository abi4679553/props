import React from 'react'
import Array from "./Array"
import Boolean from './Boolean'
import Number from './Number'
import String from './String'



const Home = () => {
  return (
    <div>
      
    <String name={"abi"} />
    <Number age={'26'} />
    <Boolean islogged={false} />
    <Array name={["abi","sara","dcm"]}/>
      
       

    </div>
  )
}

export default Home