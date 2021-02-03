import React, { useEffect, useState } from 'react'
import {
    QuotesContainer,
    QuotesItem,
    QuotesText,
    QuotesAuthor,
    IconWrapper,
    ToggleIcon,
    LoaderContainer
} from './QuotesElements'
import FadeLoader from "react-spinners/FadeLoader"


const Quotes = () => {
    const [quotes, setQuotes] = useState([])
    const [change, setChange] = useState(false)
    const [loading, setLoading] = useState(false)

    const toggle = () => {
        setChange(!change)
    }
    
    useEffect(() => {
        const getQuote = async () => {
            await fetch('https://type.fit/api/quotes')
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < 4; i++){
                            setQuotes(currentQuotes => {
                                const rand = Math.floor(Math.random() * data.length)
                                return ([...currentQuotes, {
                                    text: data[rand].text,
                                    author: data[rand].author,
                                }])
                            })
                    }
                })
                setLoading(false)
        }

        getQuote()
        setQuotes([])
        setLoading(true)
    }, [change])


    return (
        <QuotesContainer id='quotes'>
            <IconWrapper>
                <ToggleIcon onClick={toggle}/>
            </IconWrapper>
            {
                loading ?
                    <LoaderContainer>
                        <FadeLoader color={'#ffaf17'} loading={loading} />
                    </LoaderContainer>        
                :
                    quotes.map((quote, i) => (
                        <QuotesItem key={i}>
                            <QuotesText>
                                {quote.text}
                            </QuotesText>
                            <QuotesAuthor>
                                ~{quote.author}
                            </QuotesAuthor>
                    
                        </QuotesItem>
                    ))}
        </QuotesContainer>
    )
}

export default Quotes
