import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPeace, faCircle, faQuestion, faHatCowboySide, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faGuilded } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

import './Sidebar.css'
import { NavLink } from 'react-router-dom'



const Sidebar = () => {
    return (
        <motion.nav
            className='Sidebar'
            initial={{
                x: window.innerWidth > 991 ? -100 : 0,
                y: window.innerWidth > 991 ? 0 : 100
            }}
            animate={{
                x: 0,
                y: 0
            }}
            transition={{
                duration: 1
            }}
        >
            <ul className='r-side-nav'>
                <li className='r-nav-logo'>
                    <NavLink to='/' className='r-nav-link'>
                        <FontAwesomeIcon className='r-link-icon' icon={faGuilded} />
                        <span className='r-link-text' id='brand'>GAMELAB</span>
                    </NavLink>
                </li>
                <li className='r-nav-item'>
                    <NavLink to='/bullsandcows' className='r-nav-link'>
                        <FontAwesomeIcon className='r-link-icon' icon={faHatCowboySide} />
                        <span className='r-link-text'>Bulls and Cows</span>
                    </NavLink>
                </li>
                <li className='r-nav-item'>
                    <NavLink to='/chopsticks' className='r-nav-link'>
                        <FontAwesomeIcon className='r-link-icon' icon={faHandPeace} />
                        <span className='r-link-text'>Chopsticks</span>
                    </NavLink>
                </li>
                <li className='r-nav-item'>
                    <NavLink to='/connectfour' className='r-nav-link'>
                        <FontAwesomeIcon className='r-link-icon' icon={faCircle} />
                        <span className='r-link-text'>Connect Four</span>
                    </NavLink>
                </li>
                <li className='r-nav-item'>
                    <NavLink to='/guesswho' className='r-nav-link'>
                        <FontAwesomeIcon className='r-link-icon' icon={faQuestion} />
                        <span className='r-link-text'>Guess Who?</span>
                    </NavLink>
                </li>
                <li className='r-nav-item'>
                    <NavLink to='/scotlandyard' className='r-nav-link'>
                        <FontAwesomeIcon className='r-link-icon' icon={faSearch} />
                        <span className='r-link-text'>Scotland Yard</span>
                    </NavLink>
                </li>
            </ul>
        </motion.nav>
    )
}

export default Sidebar;
