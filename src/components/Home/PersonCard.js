import React from 'react'

const PersonCard = (props) => {
    return (
        <div className='card m-1'>
            <div className="card-body py-1 row">
                <img alt='img' src={process.env.PUBLIC_URL + '/assets/thumbnails/' + props.image} width='50px' style={{ borderRadius: '50px' }} />
                <span className='ml-lg-2 ml-xl-3'>{props.name}</span>
            </div>
        </div>
    )
}

export default PersonCard
