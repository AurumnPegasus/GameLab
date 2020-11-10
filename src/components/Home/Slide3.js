import React from 'react';
import { FullpageSection } from '@ap.cx/react-fullpage';
import GameCard from './GameCard';

const Slide3 = () => {
    return (
        <FullpageSection
            style={{
                backgroundColor: '#FFFFFF',
                padding: '1em',
                fontFamily: 'Oswald'
            }}
            children={null}
        >
            <div className='container'>
                <div className="row my-3 my-md-5">
                    <h1 className='text-center display-4 display-md-3 col-12' style={{ fontFamily: 'AudioWide' }}>GAME LIBRARY</h1>
                </div>
                <p className='text-center' style={{ fontSize: '1.2rem' }}>
                    Here is the list of game we have worked on. Scroll through the list below to explore our work:
                </p>

                <div className="row flex-row flex-nowrap overflow-auto my-5">
                    <GameCard name='Bulls and Cows' link='/bullsandcows' desc='Bulls and Cows (also known as Cows and Bulls or Pigs and Bulls) is an old code-breaking mind or paper and pencil game for two or more players, predating the commercially marketed board game Mastermind.' image='bullsandcows.jpg' />
                    <GameCard name='Chopsticks' link='/chopsticks' desc='Chopsticks is a hand game for two or more players, in which players extend a number of fingers from each hand and transfer those scores by taking turns to tap one hand against another.' image='chopsticks.png' />
                    <GameCard name='Connect Four' link='/connectfour' desc='Connect Four is a two-player connection board game, in which the players choose a color and then take turns dropping colored discs into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. ' image='connectfour.webp' />
                    <GameCard name='Guess Who?' link='/guesswho' desc='Guess Who? is a two-player character guessing game, where each player secretly chooses one of 24 characters and the other player must use the process of elimination to identify the secret character.' image='guesswho.jpg' />
                    <GameCard name='Scotland Yard' link='/scotlandyard' desc='Scotland Yard is a board game in which a team of players controlling different detectives cooperate to track down a player controlling a criminal as they move around a board representing the streets of London.' image='scotlandyard.jpg' />
                </div>
            </div>
        </FullpageSection>
    )
}

export default Slide3
