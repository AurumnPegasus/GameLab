import React from 'react';
import { FullpageSection } from '@ap.cx/react-fullpage';

import PersonCard from './PersonCard';

const Slide2x = () => {
    return (
        <FullpageSection className='d-block d-lg-none' style={{
            backgroundColor: '#FFFFFF',
            padding: '1em',
        }}
            children={null}
        >
            <div className="container mt-5" style={{ fontFamily: 'Oswald' }}>
                <h1 className='text-center' style={{ fontFamily: 'AudioWide' }}> TEAM CAPTAIN'S MISTRESS</h1>
                <p className='my-5 text-center mx-3' style={{ fontSize: '1.2rem' }}>
                    <strong>Captain's Mistress</strong> is a team of 7 super-stressed, caffine-filled 2nd year students from IIIT Hyderabad.
                        </p>
                <div className="row mt-4 justify-content-center">
                    <div className="d-flex-column col-6">
                        <PersonCard name='Arihanth T.' image='placeholder.jpg'/>
                        <PersonCard name='Mehul Mathur' image='mehul.jpeg' />
                        <PersonCard name='Ritvik Kalra' image='placeholder.jpg' />
                        <PersonCard name='Sidharth Giri' image='placeholder.jpg' />

                    </div>
                    <div className="d-flex-column col-6">
                        <PersonCard name='Dhruv Kapur' image='dhruv.png' />
                        <PersonCard name='Pooja Desur' image='placeholder.jpg' />
                        <PersonCard name='Shivansh S.' image='placeholder.jpg' />
                    </div>
                </div>
            </div>
        </FullpageSection>
    )
}

export default Slide2x
