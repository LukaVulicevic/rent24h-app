import styled from 'styled-components'
import {CardElement} from '@stripe/react-stripe-js'

export const Container = styled.section `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 2em 0;
`

export const Inner = styled.div `
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 1100px;
    background-color: #303030;
    border-radius: 10px;
    color: white;
    min-height: 70vh;
    justify-content: space-between;
`

export const Title = styled.h1 `
    font-size: 2rem;
    letter-spacing: 1.6;
    margin: 1em auto;
`

export const Item = styled.div `
    display: flex;
    box-sizing: border-box;
    width: 90%;
    justify-content: space-between;
    margin: 1em auto;
    background: #1c1c1c;
    padding: .5em 1em;
    flex-flow: row wrap;
    border-radius: 10px;

    @media (min-width: 1000px) {
        width: 75%;
        padding: 1em 2em;
    }
`

export const ItemName = styled.h2 `
    font-size: 1rem;
    width: 50%;
    text-align: left;
    @media (min-width: 1000px) {
        font-size: 1.5em;
    }
`

export const ItemQuantity = styled.h2 `
    font-size: 1rem;
    width: 50%;
    text-align: right;
    @media (min-width: 1000px) {
        font-size: 1.5em;
    }
`

export const ItemPrice = styled.h2 `
    font-size: 1rem;
    width: 100%;
    text-align: right;
    @media (min-width: 1000px) {
        font-size: 1.5em;
    }
`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 1em auto;

    @media (min-width: 1000px) {
        width: 75%;
    }
`

export const CardInput = styled(CardElement) `
    box-sizing: border-box;
    color: white;
    margin: 1em auto;
    border: 1px solid #1c1c1c;
    width: 95%;
    padding: 1em;

`

export const Btn = styled.button `
    width: 50%;
    padding: .75em 2em;
    color: white;
    background-color: #eb8c2d;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 1.6;
    font-weight: 600;
    margin: 1em auto;
    text-decoration: none;

    &:focus {
        outline: none;
    }

    &:hover,:focus {
        cursor: pointer;
        background-color: #e87909;
    }

    @media (min-width: 1000px) {
        width: 33%;
    }
`

export const Input = styled.input `
    box-sizing: border-box;
    width: 95%;
    margin: 1em auto;
    padding: .75em 2em;
    color: white;
    background-color: #1c1c1c;
    border: none;

    &:focus {
        box-shadow: 0 0 1pt 2pt #eb8c2d;
        outline: none;
    }
`