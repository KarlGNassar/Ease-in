import React, { useEffect, useRef, useState } from 'react'
import {
    HeroSection,
    HeroWrapper,
    HeroSlide,
    HeroSlider,
    HeroImage,
    HeroContent,
    SliderButtons,
    PrevArrow,
    NextArrow
} from './HeroElements'

const Hero = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 10000)

        return () => {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }

        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }

        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <HeroSection id='slideshow'>
            <HeroWrapper>
                {slides.map((slide, i) => (
                    <HeroSlide key={i}>
                        {i === current && (
                            <HeroSlider>
                                <HeroImage src={slide.image} alt={slide.alt} />
                                <HeroContent>
                                    <h1>{slide.title}</h1>
                                </HeroContent>
                            </HeroSlider>
                        )}
                    </HeroSlide>
                ))}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
