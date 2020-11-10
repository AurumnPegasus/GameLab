import React from 'react'
import Fullpage, { FullPageSections } from '@ap.cx/react-fullpage'
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide2x from './Slide2x';
import Slide3 from './Slide3';

export class LandingPage extends React.Component {
    render() {
        return (
            <Fullpage>
                <FullPageSections>
                    <Slide1 />
                    <Slide2 />
                    <Slide2x />
                    <Slide3 />
                </FullPageSections>
            </Fullpage>
        )
    }
}

export default LandingPage

