import styled from 'styled-components'
import {FiRefreshCcw} from 'react-icons/fi'

export const QuotesContainer = styled.div`
    margin: 50px;
    display: flex;
    flex-direction: column;
    background: #fff;
    height: 100vh;
`

export const QuotesItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: whitesmoke;
    height: 200px;
    width: 100%;
    border-radius: 20px;
    margin-bottom: 2rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
    }
`

export const QuotesText = styled.p`
    padding: 5px;
    margin: 10px;
    word-wrap: break-word;
    font-size: clamp(1rem, 2vw, 1.2rem)
`

export const QuotesAuthor = styled.small`
    margin-right: 2rem;
    color: gray;
    font-size: clamp(0.8rem, 2vw, 1rem)
`

export const IconWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width:100%;
`

export const ToggleIcon = styled(FiRefreshCcw)`
    cursor:pointer;
    margin-bottom: 30px;
    font-size: 50px;
    z-index: 10;

    &:hover {
        transform: scale(1.05);
    }
`

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
`