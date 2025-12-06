import React from 'react'

const Object = (props) => {
    return (
        <div className=' bg-red-500 w-fit text-white'>
        {<p>employee: {props.employee.empname}</p>}
        </div>
    )
}

export default Object