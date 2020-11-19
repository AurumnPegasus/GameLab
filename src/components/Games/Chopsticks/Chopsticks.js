import React from 'react';
import ReactMarkdown from 'react-markdown';
import { InlineMath, BlockMath } from 'react-katex';
import math from 'remark-math'
import 'katex/dist/katex.min.css';

import Content from './Content.js';

const sectionTitleStyle = {
    fontFamily: 'AudioWide',
    fontSize: '2rem'
}

const renderers = {
    inlineMath: ({ value }) => <InlineMath math={value} />,
    math: ({ value }) => <BlockMath math={value} />
}

const seperator = <div className="my-4 py-2" />;

const Chopsticks = () => {
    return (
        <div className="d-flex-column align-items-end mt-3 p-0" style={{ fontFamily: 'Oswald', marginLeft: window.innerWidth > 991 ? '5rem' : '0.5rem' }}>
            <h1 className="text-center" style={{ fontSize: '3rem', fontFamily: 'AudioWide' }}>CHOPSTICKS</h1>
            <hr className='mb-5' />
            <div className='container mb-5' style={{ fontSize: '1.3rem' }}>
                <h2 style={sectionTitleStyle}>📜 INTRODUCTION AND RULES</h2>
                <hr className='mb-4' />
                <ReactMarkdown source={Content.introAndRules} />
                <img className='img-fluid' src={process.env.PUBLIC_URL + '/assets/ContentImages/Chopsticks/11.png'} alt="" />

                {seperator}

            </div>
        </div>
    )
}

export default Chopsticks
