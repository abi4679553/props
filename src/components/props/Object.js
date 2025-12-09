import React from 'react'

const Object = (props) => {
    return (
        <div className='text-xl'>
        {<p>employee: {props.employee.empname}</p>}
        </div>
    )
}

export default Object