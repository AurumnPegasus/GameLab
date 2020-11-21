import React from 'react'
import GameLogic from './GameLogic';
import ReactMarkdown from 'react-markdown';
import { InlineMath, BlockMath } from 'react-katex';
import math from 'remark-math'
import 'katex/dist/katex.min.css';

import Content from './Content.js';
import ScrollToTop from '../../Utility/ScrollToTop';

const sectionTitleStyle = {
    fontFamily: 'AudioWide',
    fontSize: '2rem'
}

const renderers = {
    inlineMath: ({ value }) => <InlineMath math={value} />,
    math: ({ value }) => <BlockMath math={value} />
}


const seperator = <div className="my-4 py-2" />;

const BullsAndCows = () => {
    return (
        <>
            <ScrollToTop />
            <div className="d-flex-column align-items-end mt-3 p-0" style={{ fontFamily: 'Oswald', marginLeft: window.innerWidth > 991 ? '5rem' : '0.5rem' }}>
                <h1 className="text-center" style={{ fontSize: '3rem', fontFamily: 'AudioWide' }}>BULLS AND COWS</h1>
                <hr className='mb-5' />
                <div className='container mb-5' style={{ fontSize: '1.3rem' }}>

                    <h2 style={sectionTitleStyle}>📜 INTRODUCTION AND RULES</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.introAndRules} />

                    {seperator}

                    <h2 style={sectionTitleStyle}>👨‍💻 IMPLEMENTATION</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.implementation} />

                    <div className="row justify-content-center mt-4 mb-5">
                        <div className="card py-5 col-12 col-md-8">
                            <GameLogic />
                        </div>
                    </div>

                    {seperator}

                    <h2 style={sectionTitleStyle}>🕵️ WOAH! HOW DOES IT WORK?</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.explanation} plugins={[math]} renderers={renderers} />

                    {seperator}

                    <h2 style={sectionTitleStyle}>🏁 HOW DID WE GET HERE?</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.process} plugins={[math]} renderers={renderers} />

                    {seperator}

                    <h2 style={sectionTitleStyle}>📝 REFERENCES</h2>
                    <hr className='mb-4' />

                    {seperator}

                    <hr className='mb-1' />
                    <h1 className="display-1 text-center">🐂🐄</h1>
                </div>
            </div>
        </>
    )
}

export default BullsAndCows;
