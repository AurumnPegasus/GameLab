import React from 'react'
import ReactMarkdown from 'react-markdown';
import { InlineMath, BlockMath } from 'react-katex';
import math from 'remark-math';
import 'katex/dist/katex.min.css';

import Content from './Content.js';
import ScrollToTop from '../../Utility/ScrollToTop.js';

const sectionTitleStyle = {
    fontFamily: 'AudioWide',
    fontSize: '2rem'
}

const renderers = {
    inlineMath: ({ value }) => <InlineMath math={value} />,
    math: ({ value }) => <BlockMath math={value} />
}


const seperator = <div className="my-4 py-2" />;

const GuessWho = () => {
    return (
        <>
            <ScrollToTop />
            <div className="d-flex-column align-items-end mt-3 p-0" style={{ fontFamily: 'Oswald', marginLeft: window.innerWidth > 991 ? '5rem' : '0.5rem' }}>
                <h1 className="text-center" style={{ fontSize: '3rem', fontFamily: 'AudioWide' }}>GUESS WHO?</h1>
                <hr className='mb-5' />
                <div className='container mb-5' style={{ fontSize: '1.3rem' }}>

                    <h2 style={sectionTitleStyle}>📜 INTRODUCTION AND RULES</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.introAndRules1} />

                    {seperator}

                    <h2 style={sectionTitleStyle}>👀 A QUICK ANALYSIS</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.quickAnalysis1} />

                    <ReactMarkdown source={Content.quickAnalysis2} />

                    {seperator}

                    <h2 style={sectionTitleStyle}>🤿 A DEEPER DIVE</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.deeperDive1} plugins={[math]} renderers={renderers} />
                    <div className="row justify-content-center mb-5">
                        <img src={process.env.PUBLIC_URL + '/assets/ContentImages/GuessWho/1.png'} alt="Distribution" className="img-fluid col-12 col-md-8" />
                    </div>
                    <ReactMarkdown source={Content.deeperDive2} plugins={[math]} renderers={renderers} />

                    {seperator}

                    <h2 style={sectionTitleStyle}>⚙️ GETTING TECHNICAL: THE MAXIMUM COVERAGE PROBLEM</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.maximumCoverageProblem} plugins={[math]} renderers={renderers} />

                    {seperator}

                    <h2 style={sectionTitleStyle}>✨ APPLYING THE THEORY</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.application1} plugins={[math]} renderers={renderers} />
                    <div className="row justify-content-center mb-5">
                        <img src={process.env.PUBLIC_URL + '/assets/ContentImages/GuessWho/2.png'} alt="Distribution" className="img-fluid col-6 col-md-3" />
                    </div>
                    <ReactMarkdown source={Content.application2} plugins={[math]} renderers={renderers} />
                </div>
            </div>
        </>
    )
}

export default GuessWho
