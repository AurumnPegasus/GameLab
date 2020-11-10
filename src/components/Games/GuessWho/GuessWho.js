import React from 'react'

const GuessWho = () => {
    return (
        <div className="d-flex-column align-items-end mt-3 p-0" style={{ fontFamily: 'Oswald', marginLeft: window.innerWidth > 991 ? '5rem' : '0.5rem' }}>
            <h1 className="text-center" style={{ fontSize: '3rem', fontFamily: 'AudioWide' }}>GUESS WHO?</h1>
            <hr className='mb-5' />
            <div className='container mb-5' style={{ fontSize: '1.3rem' }}>
                Content and styling here
            </div>
        </div>
    )
}

export default GuessWho
