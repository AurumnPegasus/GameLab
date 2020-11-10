import React from 'react';
import { FullpageSection } from '@ap.cx/react-fullpage';
import PersonCard from './PersonCard';

const Slide2 = () => {
    return (
        <FullpageSection style={{
            backgroundColor: '#FFFFFF',
            padding: '1em',
        }}
            children={null}
        >
            <div className="mx-5">
                <div className="row justify-content-center">
                    <h1
                        style={{ fontFamily: 'AudioWide', fontSize: '4rem' }}
                    >GAMELAB</h1>
                </div>
                <div className="row justify-content-center overflow-auto">
                    <p className="lead" style={{ fontFamily: 'Oswald' }}>
                        With <span style={{ color: 'red' }}>❤</span> from Team Captain's Mistress
                    </p>
                </div>
                <hr></hr>
                <div className="row" style={{ fontFamily: 'Oswald' }}>
                    <div className="d-flex-column col-12 col-lg-5 ml-lg-2">
                        <h3 className='text-center'>About<br /> GAMELAB</h3>
                        <p className='mt-4 text-center mx-3' style={{ fontSize: '1.2rem' }}>
                            GAMELAB is our final project for the <strong>Algorithms Analysis and Design</strong> course in Monsoon 2020.
                        The idea is to break down some simple skill-based games and to identify and analyze optimal solutions for them. We analyzed 4 relatively simple skill-based
                        games to gather the required know-how and experience to be able to tackle the final target: <strong>Scotland Yard</strong>. This site is a culmination of all our
                        findings for each of the games that we have analyzed.
                        </p>
                    </div>
                    <div className="d-flex-column d-none d-lg-block col-lg-6" style={{ borderLeft: "2px solid rgba(0, 0, 0, 0.05)" }}>
                        <h3 className='text-center'>About<br /> Team Captain's Mistress</h3>
                        <p className='mt-4 text-center mx-3' style={{ fontSize: '1.2rem' }}>
                            <strong>Captain's Mistress</strong> is a team of 7 super-stressed, caffine-filled 2nd year students from IIIT Hyderabad.
                        </p>
                        <div className="row mt-4 mx-2 justify-content-center">
                            <div className="d-flex-column col-5 col-xl-4">
                                <PersonCard name='Arihanth T.' image='placeholder.jpg' last={false} />
                                <PersonCard name='Mehul Mathur' image='mehul.jpeg' last={false} />
                                <PersonCard name='Ritvik Kalra' image='placeholder.jpg' last={false} />
                                <PersonCard name='Sidharth Giri' image='placeholder.jpg' last={true} />

                            </div>
                            <div className="col-1"></div>
                            <div className="d-flex-column col-5 col-xl-4">
                                <PersonCard name='Dhruv Kapur' image='dhruv.png' last={false} />
                                <PersonCard name='Pooja Desur' image='placeholder.jpg' last={false} />
                                <PersonCard name='Shivansh S.' image='placeholder.jpg' last={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </FullpageSection >
    )
}

export default Slide2
