import React from 'react'

const ListCard = ({ data }) => {
    const { icon, text } = data
    return (
        <div className='bg-white p-5 flex gap-5 items-center mb-5'>
            {icon}
            <h1 className='font-bold '>{text}</h1>
        </div>
    )
}

export default ListCard