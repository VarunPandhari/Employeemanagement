import React from 'react'
import Card from './Card';
const Cards = (props) => {
    return (

        <div className='flex flex-col justify-center items-center gap-10 text-white m-2 mr-10'>

            <div className='cards grid grid-cols-1 w-[80%]'>
                {
                    props.tours.map((tour) => {
                        return <Card tour={tour} />
                    })
                }
            </div>
        </div>
    )
}

export default Cards;
