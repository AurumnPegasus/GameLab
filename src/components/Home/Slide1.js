import React from 'react'
import { motion } from 'framer-motion';
import { FullpageSection } from '@ap.cx/react-fullpage';

const Slide1 = () => {
    return (
        <FullpageSection style={{
            backgroundColor: '#000000',
            color: "#CCFF00",
            padding: '1em',
            fontFamily: "AudioWide"
        }}
            children={null}
        >
            <div className="row justify-content-center h-100 align-items-center">
                <motion.h1 className="unselectable"
                    style={{
                        fontSize: "12vw"
                    }}
                    initial={{
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                >
                    GAMELAB
                </motion.h1>
            </div>
        </FullpageSection>
    )
}

export default Slide1;
