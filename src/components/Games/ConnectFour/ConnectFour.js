import React from 'react'
import ReactMarkdown from 'react-markdown';
import { InlineMath, BlockMath } from 'react-katex';
import math from 'remark-math'
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

const ConnectFour = () => {
    return (
        <>
            <ScrollToTop />
            <div className="d-flex-column align-items-end mt-3 p-0" style={{ fontFamily: 'Oswald', marginLeft: window.innerWidth > 991 ? '5rem' : '0.5rem' }}>
                <h1 className="text-center" style={{ fontSize: '3rem', fontFamily: 'AudioWide' }}>CONNECT FOUR</h1>
                <hr className='mb-5' />
                <div className='container mb-5' style={{ fontSize: '1.3rem' }}>
                    <h2 style={sectionTitleStyle}>📜 INTRODUCTION AND RULES</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.intro} plugins={[math]} renderers={renderers} />

                    {seperator}

                    <h2 style={sectionTitleStyle}>🛣️ APPROACHING THE GAME</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.approach} plugins={[math]} renderers={renderers} />

                    {seperator}

                    <h2 style={sectionTitleStyle}>⚄ SOME POSSIBLE BOARDS</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.boards} plugins={[math]} renderers={renderers} />

                    {seperator}

                    <h2 style={sectionTitleStyle}>☠️ THREATS</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.threat1} plugins={[math]} renderers={renderers} />

                    <div className="col">
                        <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Connect4/1.png'} alt="" />
                    </div>

                    <ReactMarkdown source={Content.threat2} plugins={[math]} renderers={renderers} />

                    <div className="col">
                        <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Connect4/2.png'} alt="" />
                    </div>

                    <ReactMarkdown source={Content.threat3} plugins={[math]} renderers={renderers} />

                    {seperator}

                    <h2 style={sectionTitleStyle}>❂ ZUGZWANG</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.zug1} plugins={[math]} renderers={renderers} />

                    <div className="col">
                        <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Connect4/3.png'} alt="" />
                    </div>

                    <ReactMarkdown source={Content.zug2} plugins={[math]} renderers={renderers} />

                    <div className="col">
                        <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Connect4/4.png'} alt="" />
                    </div>

                    <ReactMarkdown source={Content.zug3} plugins={[math]} renderers={renderers} />

                    <div className="col">
                        <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Connect4/5.png'} alt="" />
                    </div>

                    <ReactMarkdown source={Content.zug4} plugins={[math]} renderers={renderers} />

                    <div className="col">
                        <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Connect4/6.png'} alt="" />
                    </div>

                    {seperator}

                    <h2 style={sectionTitleStyle}>🕵️‍♂️ STRATERGIES</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.strat1} plugins={[math]} renderers={renderers} />

                    <div className="col">
                        <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Connect4/7.png'} alt="" />
                    </div>

                    <ReactMarkdown source={Content.strat2} plugins={[math]} renderers={renderers} />

                    <div className="col">
                        <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Connect4/8.png'} alt="" />
                    </div>

                    <ReactMarkdown source={Content.strat3} plugins={[math]} renderers={renderers} />

                    <div className="col">
                        <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Connect4/9.png'} alt="" />
                    </div>

                    <ReactMarkdown source={Content.strat4} plugins={[math]} renderers={renderers} />

                    <div className="col">
                        <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Connect4/10.png'} alt="" />
                    </div>

                    <ReactMarkdown source={Content.strat5} plugins={[math]} renderers={renderers} />

                    <div className="col">
                        <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Connect4/11.png'} alt="" />
                    </div>

                    <ReactMarkdown source={Content.strat6} plugins={[math]} renderers={renderers} />

                    <div className="col">
                        <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Connect4/12.png'} alt="" />
                    </div>

                    <ReactMarkdown source={Content.strat7} plugins={[math]} renderers={renderers} />

                    <div className="col">
                        <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Connect4/13.png'} alt="" />
                    </div>

                    <ReactMarkdown source={Content.strat8} plugins={[math]} renderers={renderers} />

                    <div className="col">
                        <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Connect4/14.png'} alt="" />
                    </div>

                    {seperator}

                    <h2 style={sectionTitleStyle}>⚫⚪ BLACK AND WHITE</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.bw} plugins={[math]} renderers={renderers} />

                    {seperator}

                    <h2 style={sectionTitleStyle}>🧠 FOOD FOR THOUGHT</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.fft} plugins={[math]} renderers={renderers} />
                    <div className="col">
                        <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Connect4/15.png'} alt="" />
                    </div>

                    {seperator}

                    <h2 style={sectionTitleStyle}>📝 REFERENCES</h2>
                    <hr className='mb-4' />
                </div>
            </div>
        </>
    )
}

export default ConnectFour
