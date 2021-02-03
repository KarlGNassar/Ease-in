import React, { useEffect, useState } from 'react'
import {
    QuotesContainer,
    QuotesItem,
    QuotesText,
    QuotesAuthor,
    IconWrapper,
    ToggleIcon
} from './QuotesElements'

const Quotes = () => {
    const [quotes, setQuotes] = useState([])
    const [change, setChange] = useState(false)

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
        }

        getQuote()
        setQuotes([])
    }, [change])

    return (
        <QuotesContainer id='quotes'>
            <IconWrapper>
                <ToggleIcon onClick={toggle}/>
            </IconWrapper>
            {quotes.map((quote, i) => (
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
