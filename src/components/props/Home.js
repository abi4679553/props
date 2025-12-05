import React from 'react'
import Array from "./Array"
import Boolean from './Boolean'
import Number from './Number'
import String from './String'
import Object from './Object'
import Function from './Function'
import Arrayofobject from './Arrayofobject'
import Component from './Component'



const Home = () => {
  return (
    <div>

      <String name={"abi"} />
      <Number age={'26'} />
      <Boolean islogged={false} />
      <Array name={["abi", "sara", "dcm"]} />

      <Arrayofobject user={[
        { user1: "Acc", age: 21 },
        { user2: "Sara", age: 20 },
        { user3: "Dcm", age: 22 }

      ]} />

      <Object employee={
        { empname: "abcd", id: "101" }} />

      Function students {
        alert("Hello from Parent Function!")
      };

      <h1>This is inside child component</h1>





    </div>
  )
}

export default Home