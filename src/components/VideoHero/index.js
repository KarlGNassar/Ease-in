import React from 'react'
import Video from '../../video/beachVideo.mp4'
import { Button } from '../Button'
import {
    VideoContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    Arrow
} from './VideoElements'

const HeroVideo = () => {
    return (
        <VideoContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' preload />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Your Daily Dose of Motivation
                </HeroH1>
                <Button
                    to='quotes'
                    style={{maxWidth: '160px'}}
                    smooth={true}
                    duration={1000}
                    offset={-55}
                >
                    Get Started
                    <Arrow />
            </Button>
            </HeroContent>
        </VideoContainer>
    )
}

export default HeroVideo
