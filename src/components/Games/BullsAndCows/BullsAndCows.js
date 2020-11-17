import React from 'react'
import GameLogic from './GameLogic';
import ReactMarkdown from 'react-markdown';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const BullsAndCows = () => {
    return (
        <div className="d-flex-column align-items-end mt-3 p-0" style={{ fontFamily: 'Oswald', marginLeft: window.innerWidth > 991 ? '5rem' : '0.5rem' }}>
            <h1 className="text-center" style={{ fontSize: '3rem', fontFamily: 'AudioWide' }}>BULLS AND COWS</h1>
            <hr className='mb-5' />
            <div className='container mb-5' style={{ fontSize: '1.3rem' }}>
                <div>
                    <ReactMarkdown>
                        #### The Bulls and Cows game is an old code-breaking game, where one person gets to guess the
                        secret code of another while using hints of the form [`x Bulls y Cows`]. The response in turn means:
                    </ReactMarkdown>
                    <ReactMarkdown>
                        - [`x Bulls`] means that `x` of the digits in the code given by you, match the *digit* &nbsp;and *position* in the code.
                    </ReactMarkdown>
                    <ReactMarkdown>
                        - [`y Cows`] means that `y` of the digits in the code given by you, match the *digit* &nbsp;**but not the** *position* in the code.
                    </ReactMarkdown>
                    <ReactMarkdown>
                        This implies that *Bulls* &nbsp; and *Cows* are mutually exclusive in nature.
                    </ReactMarkdown>
                    <hr className='mb-2' />
                    <ReactMarkdown>
                        Here we have made a **Bulls and Cows Predictor** which basically can guess your code in atmost 7 tries. You can choose a number for yourself
                        and give it a go! *Just make sure to not put any wrong value for* `[bulls]` or `[cows]` *since that causes error in the guessing process*
                    </ReactMarkdown>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="card py-5 col-12 col-md-8">
                        <GameLogic />
                    </div>
                </div>
                <hr className='mb-2 mt-4' />
                <ReactMarkdown>
                    ## Underlying Idea behind the Predictor
                </ReactMarkdown>
                <ReactMarkdown>
                    We are at every step trying to make the *best guess* each time, so that we can find your code in the least amount of steps.
                    But what does this **best guess** mean?
                </ReactMarkdown>
                <ReactMarkdown>
                    The idea is that, for each guess that we make, we have 14 possible responses.
                    Each response would eliminate a different number of items from the possible numbers list, and consequently, the resulting list would have
                    different sizes. We need to identify the response that leaves the largest number of items in the list. we are *basically optimising the worst case scenario*
                    and then we choose the **best "worst case scenario"** and proceeed from there (*basically the idea of backtracking*).
                    Let us assign this number of items still in the list after elimination as the "score" of that guess. In more formal terms:
                </ReactMarkdown>
                <ReactMarkdown>
                    The **score of a guess** is the *largest number of items still in the list after elimination that that guess would lead to,
                    out of all possible responses it can get*.
                </ReactMarkdown>
                <ReactMarkdown>
                    After finiding the *scores* for each guess that one could make, to find the most optimal guess for a particular round,
                    we then need to take the minimum  of these scores that are available to us. You can see that **there is some minimax stratergy involved**:
                </ReactMarkdown>
                <ReactMarkdown>
                    We maximise the size that could be left for each of the possible guesses and then try to pick the minimum of all those maximum sizes.
                </ReactMarkdown>
                <ReactMarkdown>
                    At any point where we need to make a guess (after the first guess), say we choose one of n numbers as our guess,
                    represented by:
                </ReactMarkdown>
                <BlockMath math="G_1, G_2\dots G_n" />
                <ReactMarkdown>Now for each guess, we can get one of `m` responses, represented by</ReactMarkdown>
                <BlockMath math="r_1, r_2\dots r_m\ (m = 14\ in\ our\ case)" />
                <ReactMarkdown>
                    Now for each guess we want to see its worst case size left so we can define a `Score` for each guess `i` and stores the worst case size of each reponse `r[j]`
                    as `s[ij]`. Mathematically,
                </ReactMarkdown>
                <BlockMath math="Score_i=max(S_{i\ 1}, S_{i\ 2}\dots S_{i\ m})" />
                <ReactMarkdown>
                    And then to choose our best guess, we need to take the smallest of these scores:
                </ReactMarkdown>
                <BlockMath math="Best=min(Score_1, Score_2\dots Score_n)" />
                <ReactMarkdown>
                    This results in the most optimal guess at each level. We are basically doing this till we find the secret code. Due to the optimal guessing stratergy, *we are
                    able to find the secret code in atmost 7 guesses*.
                </ReactMarkdown>
                <hr className='mb-2' />
            </div>
        </div >
    )
}

export default BullsAndCows
