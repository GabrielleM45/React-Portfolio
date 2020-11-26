import React, { useState } from 'react';
import Video from '../../assets/Video/video.mp4';
import { Button } from '../buttonElements';

import { HeroContainer, HeroBg, HeroContent, HeroVid, HeroP, HeroH1, HeroBtnWrapper, HeroArrowDown, HeroArrowDown2 } from './heroElements';

const HeroSection = () => {
const [hover, setHover] = useState(false)

const onHover = () => {
    setHover(!hover);
};
    return (
        <HeroContainer id="home">
            <HeroBg>
                <HeroVid autoPlay loop muted src={ Video } type='video/mp4' />
            </HeroBg>

                        <HeroContent>
                            <HeroH1>Gabrielle Maxey</HeroH1>
                                <HeroP>
                                A life long lover of learning currently emersed in Full Stack Web Development and DevOps. To learn more about me please see below.
                                </HeroP>

                        <HeroBtnWrapper>
                            <Button to="about" smooth={true} duration={500} spy={true} exact='true' offset={ -80 } onMouseEnter={onHover} onMouseLeave={onHover} > { hover ? <HeroArrowDown2 /> : <HeroArrowDown />} </Button>
                    </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};
export default HeroSection;