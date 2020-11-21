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

const ScotlandYard = () => {
    return (
        <>
            <ScrollToTop />
            <div className="d-flex-column align-items-end mt-3 p-0" style={{ fontFamily: 'Oswald', marginLeft: window.innerWidth > 991 ? '5rem' : '0.5rem' }}>
                <h1 className="text-center" style={{ fontSize: '3rem', fontFamily: 'AudioWide' }}>SCOTLAND YARD</h1>
                <hr className='mb-5' />
                <div className='container mb-5' style={{ fontSize: '1.3rem' }}>
                    <h2 style={sectionTitleStyle}>🕵️‍♂️ INTRODUCTION</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.intro} />

                    {seperator}

                    <h2 style={sectionTitleStyle}>📜 RULES</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.rule1} />

                    <div className="text-center mb-4">
                        <figure class="figure">
                            <img className='img-fluid figure-img  mx-auto d-block' style={{ height: "40rem", width: "auto" }} src={process.env.PUBLIC_URL + '/assets/ContentImages/ScotlandYard/1.png'} alt="" />
                            <figcaption class="figure-caption">Scotland Yard Map</figcaption>
                        </figure>
                    </div>

                    <ReactMarkdown source={Content.rule2} />

                    {seperator}

                    <h2 style={sectionTitleStyle}>🎯 OBJECTIVE</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.obj} />

                    {seperator}

                    <h2 style={sectionTitleStyle}>🏗️ LAYING THE FOUNDATION</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.foundation} plugins={[math]} renderers={renderers} />

                    {seperator}

                    <h2 style={sectionTitleStyle}>🤵 FORMALISATION</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.formal1} plugins={[math]} renderers={renderers} />

                    <div className="text-center mb-4 mt-2">
                        <figure class="figure">
                            <img className='img-fluid figure-img  mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/ScotlandYard/2.png'} alt="" />
                        </figure>
                    </div>

                    <ReactMarkdown source={Content.formal2} plugins={[math]} renderers={renderers} />

                    <div className="text-center mb-4 mt-2">
                        <figure class="figure">
                            <img className='img-fluid figure-img  mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/ScotlandYard/3.png'} alt="" />
                        </figure>
                    </div>

                    <ReactMarkdown source={Content.formal3} plugins={[math]} renderers={renderers} />

                    <div className="text-center mb-4 mt-2">
                        <figure class="figure">
                            <img className='img-fluid figure-img  mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/ScotlandYard/4.png'} alt="" />
                        </figure>
                    </div>

                    <ReactMarkdown source={Content.formal4} plugins={[math]} renderers={renderers} />
                    <div className="text-center mb-4 mt-2">
                        <figure class="figure">
                            <img className='img-fluid figure-img  mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/ScotlandYard/5.png'} alt="" />
                        </figure>
                    </div>

                    <ReactMarkdown source={Content.formal5} plugins={[math]} renderers={renderers} />

                    <div className="text-center mb-4 mt-2">
                        <figure class="figure">
                            <img className='img-fluid figure-img  mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/ScotlandYard/6.png'} alt="" />
                        </figure>
                    </div>

                    <ReactMarkdown source={Content.formal6} plugins={[math]} renderers={renderers} />

                    <div className="text-center mb-4 mt-2">
                        <figure class="figure">
                            <img className='img-fluid figure-img  mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/ScotlandYard/7.png'} alt="" />
                        </figure>
                    </div>

                    <ReactMarkdown source={Content.formal7} plugins={[math]} renderers={renderers} />

                    {seperator}

                    <h2 style={sectionTitleStyle}>🌌 PSPACE</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.pspace} plugins={[math]} renderers={renderers} />

                    {seperator}

                    <h2 style={sectionTitleStyle}>🏃 HEURISTICS</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.heuristics} plugins={[math]} renderers={renderers} />

                    {seperator}

                    <h2 style={sectionTitleStyle}>🛠️ SOLVING SCOTLAND YARD</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.solve1} plugins={[math]} renderers={renderers} />

                    <div className="text-center mb-4 mt-2">
                        <figure class="figure">
                            <img className='img-fluid figure-img  mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/ScotlandYard/8.png'} alt="" />
                            <figcaption class="figure-caption">Selection</figcaption>
                        </figure>
                    </div>

                    <ReactMarkdown source={Content.solve2} plugins={[math]} renderers={renderers} />

                    <div className="text-center mb-4 mt-2">
                        <figure class="figure">
                            <img className='img-fluid figure-img  mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/ScotlandYard/9.png'} alt="" />
                            <figcaption class="figure-caption">Expansion</figcaption>
                        </figure>
                    </div>

                    <ReactMarkdown source={Content.solve3} plugins={[math]} renderers={renderers} />

                    <div className="text-center mb-4 mt-2">
                        <figure class="figure">
                            <img className='img-fluid figure-img  mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/ScotlandYard/10.png'} alt="" />
                            <figcaption class="figure-caption">Simulation</figcaption>
                        </figure>
                    </div>

                    <ReactMarkdown source={Content.solve4} plugins={[math]} renderers={renderers} />

                    <div className="text-center mb-4 mt-2">
                        <figure class="figure">
                            <img className='img-fluid figure-img  mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/ScotlandYard/11.png'} alt="" />
                            <figcaption class="figure-caption">Back Propagation</figcaption>
                        </figure>
                    </div>

                    <ReactMarkdown source={Content.solve5} plugins={[math]} renderers={renderers} />

                    <div className="text-center mb-4 mt-2">
                        <figure class="figure">
                            <img className='img-fluid figure-img  mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/ScotlandYard/12.png'} alt="" />
                            <figcaption class="figure-caption">A sub-graph of Scotland Yard graph</figcaption>
                        </figure>
                    </div>

                    <ReactMarkdown source={Content.solve6} plugins={[math]} renderers={renderers} />

                    <div className="text-center mb-4 mt-2">
                        <figure class="figure">
                            <img className='img-fluid figure-img  mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/ScotlandYard/13.png'} alt="" />
                        </figure>
                    </div>

                    <ReactMarkdown source={Content.solve7} plugins={[math]} renderers={renderers} />

                    <div className="text-center mb-4 mt-2">
                        <figure class="figure">
                            <img className='img-fluid figure-img  mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/ScotlandYard/14.png'} alt="" />
                        </figure>
                    </div>

                    <ReactMarkdown source={Content.solve8} plugins={[math]} renderers={renderers} />

                    {seperator}

                    <h2 style={sectionTitleStyle}>📝 REFERENCES</h2>
                    <hr className='mb-4' />
                </div>
            </div>
        </>
    )
}

export default ScotlandYard
