import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGuilded } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const MiniHomeButton = (props) => {
    return props.location.pathname === '/' ? null : (
        <motion.nav
            className="navbar navbar-light d-block d-lg-none"
            style={{ backgroundColor: "#000000" }}
            initial={{
                y: -100
            }}
            animate={{
                y: 0
            }}
            transition={{
                duration: 1
            }}
        >
            <Link className="navbar-brand mt-1 ml-1" to="/">
                <FontAwesomeIcon icon={faGuilded} style={{
                    fontSize: '2rem',
                    color: "#CCFF00",
                }} />
            </Link>
        </motion.nav>
    )
}

export default withRouter(MiniHomeButton);
