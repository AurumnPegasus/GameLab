import React from 'react';
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

const Chopsticks = () => {
    return (
        <>
            <ScrollToTop />
            <div className="d-flex-column align-items-end mt-3 p-0" style={{ fontFamily: 'Oswald', marginLeft: window.innerWidth > 991 ? '5rem' : '0.5rem' }}>
                <h1 className="text-center" style={{ fontSize: '3rem', fontFamily: 'AudioWide' }}>CHOPSTICKS</h1>
                <hr className='mb-5' />
                <div className='container mb-5' style={{ fontSize: '1.3rem' }}>
                    <h2 style={sectionTitleStyle}>📜 INTRODUCTION</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.intro} />

                    <div className="row align-items-center">
                        <div className="col">
                            <ReactMarkdown source={Content.rule1} />
                        </div>
                        <div className="col">
                            <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Chopsticks/0.jpeg'} alt="" />
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col">
                            <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Chopsticks/1.jpeg'} alt="" />
                        </div>
                        <div className="col">
                            <ReactMarkdown source={Content.rule2} />
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col">
                            <ReactMarkdown source={Content.rule3} />
                        </div>
                        <div className="col">
                            <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Chopsticks/2.jpeg'} alt="" />
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col">
                            <ReactMarkdown source={Content.rule4} />
                        </div>
                    </div>

                    <div className="row align-items-start">
                        <div className="col">
                            <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Chopsticks/4.jpeg'} alt="" />
                        </div>
                        <div className="col">
                            <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Chopsticks/3.jpeg'} alt="" />
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col">
                            <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Chopsticks/5.jpeg'} alt="" />
                        </div>
                        <div className="col">
                            <ReactMarkdown source={Content.rule5} />
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col">
                            <ReactMarkdown source={Content.rule6} />
                        </div>
                        <div className="col">
                            <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Chopsticks/6.jpeg'} alt="" />
                        </div>
                    </div>

                    {seperator}

                    <h2 style={sectionTitleStyle}>🃏 VARIANTS</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.variant1} />

                    <div className="row align-items-center">
                        <div className="col">
                            <ReactMarkdown source={Content.variant2} />
                        </div>
                        <div className="col">
                            <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Chopsticks/7.jpeg'} alt="" />
                        </div>
                    </div>

                    <div className="row align-items-start">
                        <div className="col">
                            <img className='img-fluid figure-img mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Chopsticks/8.jpeg'} alt="" />
                            <figcaption class="figure-caption">Either player 1's right hand is dead, as it exceeded the total of 5 fingers</figcaption>
                        </div>
                        <div className="col">
                            <img className='img-fluid figure-img  mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Chopsticks/9.png'} alt="" />
                            <figcaption class="figure-caption"> Player 1 right hand is left with two fingers as leftovers (mod 5). The five that count as dead are subtracted leaving player 1's right hand with two fingers up.</figcaption>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col">
                            <img className='img-fluid mx-auto d-block' src={process.env.PUBLIC_URL + '/assets/ContentImages/Chopsticks/10.jpeg'} alt="" />
                        </div>
                        <div className="col">
                            <ReactMarkdown source={Content.variant3} />
                        </div>
                    </div>

                    {seperator}

                    <h2 style={sectionTitleStyle}>🖋️ ABSTRACTION</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.abst1} plugins={[math]} renderers={renderers} />

                    <div className="text-center mb-4">
                        <figure class="figure">
                            <img className='img-fluid figure-img  mx-auto d-block' style={{ height: "40rem", width: "auto" }} src={process.env.PUBLIC_URL + '/assets/ContentImages/Chopsticks/11.png'} alt="" />
                            <figcaption class="figure-caption">This is only the intuition for the game flow and not how the actual graph looks.</figcaption>
                        </figure>
                    </div>
                    <div className="text-center">
                        <figure class="figure">
                            <img className='img-fluid figure-img  mx-auto d-block' style={{ height: "40rem", width: "auto" }} src={process.env.PUBLIC_URL + '/assets/ContentImages/Chopsticks/12.png'} alt="" />
                            <figcaption class="figure-caption">This is what actual graph looks like</figcaption>
                        </figure>
                    </div>
                    <ReactMarkdown source={Content.abst2} plugins={[math]} renderers={renderers} />

                    {seperator}

                    <h2 style={sectionTitleStyle}>🧮 ALGORITHM</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.algo1} plugins={[math]} renderers={renderers} />
                    <table class="table table-sm table-bordered" style={{ "text-align": "center" }}>
                        <thead>
                            <tr>
                                <th scope="col">No. of Players(K)</th>
                                <th scope="col">Complexity(Cm)</th>
                                <th scope="col">Time(T)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">2</th>
                                <td><InlineMath math="5^{12}" /></td>
                                <td><InlineMath math="<\ 10 \text{ seconds}" /></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td><InlineMath math="5^{18}" /></td>
                                <td><InlineMath math="<\ 20 \text{ minutes}" /></td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td><InlineMath math="5^{24}" /></td>
                                <td><InlineMath math="<\ 3 \text{ months}" /></td>
                            </tr>
                        </tbody>
                    </table>

                    {seperator}

                    <h2 style={sectionTitleStyle}>📝 REFERENCES</h2>
                    <hr className='mb-4' />
                    <ReactMarkdown source={Content.resource} />

                    <hr className='mb-1' />
                    <h1 className="display-1 text-center">🥢</h1>
                </div>
            </div>
        </>

    )
}

export default Chopsticks
