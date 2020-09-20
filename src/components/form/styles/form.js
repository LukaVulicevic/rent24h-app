import styled from 'styled-components'
import {Link as ReactRouterLink} from 'react-router-dom'


export const Container = styled.section `
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Base = styled.form `
    box-sizing: border-box;
    width: 33%;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #303030;
    border-radius: 10px;
    color: #dedede;
    min-width: 600px;

    @media (max-width: 600px){
        min-width: 80%;
    }
`

export const Title = styled.h1 `
    font-size: 2.5rem;
`

export const Text = styled.p `
    margin-bottom: 5px;
    font-size: 0.9rem;
`

export const TextSmall = styled.p `
    font-size: 0.9rem;
    margin: 0;
`

export const Link = styled(ReactRouterLink) `
    text-transform: uppercase;
    color: #eb8c2d;
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 1.6;

    &:hover,:focus {
        cursor: pointer;
        color: #e87909;
    }
`

export const Input = styled.input `
    box-sizing:border-box;
    width: 70%;
    padding: .75em 1.25em;
    margin: 1em;
    border-radius: 10px;
    border: none;
    text-align: center;
    &:focus {
        box-shadow: 0 0 1pt 2pt #eb8c2d;
        outline: none;
    }
`

export const Select = styled.select `
    box-sizing:border-box;
    padding: .75em 1.25em;
    margin: 1em;
    border-radius: 10px;
    border: none;
    width: 70%;
    text-align: center;
    &:focus {
        box-shadow: 0 0 1pt 2pt #eb8c2d;
        outline: none;
    }
`

export const Submit = styled.button `
    padding: .75em 2em;
    color: white;
    background-color: #eb8c2d;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 1.6;
    font-weight: 600;
    margin: 1em;

    &:focus {
        outline: none;
    }

    &:hover,:focus {
        cursor: pointer;
        background-color: #e87909;
    }

    &:disabled {
        opacity: 0.5;
    }
`

export const Error = styled.div `
    background-color: #1c1c1c;
    border-radius: 10px;
    padding: 1em;
    color: #ad0707;
    margin-bottom: 1em;
`

