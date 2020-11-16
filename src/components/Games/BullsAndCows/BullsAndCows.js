import React from 'react'
import GameLogic from './GameLogic';

const BullsAndCows = () => {
    return (
        <div className="d-flex-column align-items-end mt-3 p-0" style={{ fontFamily: 'Oswald', marginLeft: window.innerWidth > 991 ? '5rem' : '0.5rem' }}>
            <h1 className="text-center" style={{ fontSize: '3rem', fontFamily: 'AudioWide' }}>BULLS AND COWS</h1>
            <hr className='mb-5' />
            <div className='container mb-5' style={{ fontSize: '1.3rem' }}>
                <div className="row justify-content-center">
                    <div className="card py-5 col-12 col-md-8">
                        <GameLogic />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BullsAndCows
