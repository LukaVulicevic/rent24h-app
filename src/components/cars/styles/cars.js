import styled from 'styled-components'
import {Link as ReachLink} from 'react-router-dom'

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 2em auto;
    color: #dedede;
    min-height: 65vh;
`

export const Item = styled.div `   
    background-color: #303030;
    width: 80%;
    display: grid;
    text-align: center;
    margin-bottom: 1em;
    border-radius: 10px;
    padding: 1em;

    @media(min-width: 900px) {
        grid-template-areas: 
            "name name ."
            "image image price"
            "image image order"
            "info info .";
        max-width: 1000px;
        background-color: #1c1c1c;
        &:first-child {
            border-top: 1px solid #eb8c2d;
        }
        border-bottom: 1px solid #eb8c2d;
        border-radius: 0;
    }
`

export const Name = styled.h2 `
    font-size: 2rem;

    @media(min-width: 900px) {
        grid-area: name;
        font-size: 3rem;
        margin: auto;
    }
`

export const Image = styled.img `
    object-fit: cover;
    width: 100%;

    @media(min-width: 900px) {
        grid-area: image;
        width: 600px;
        margin: auto;
    }
`

export const InfoList = styled.ul `
    display: flex;
    padding: 0;
    margin: auto;
    margin-top: 0;
    @media(min-width: 900px) {
        grid-area: info;
    }
`

export const InfoItem = styled.li `
    margin: 0 1em;
    list-style: none;
    color: #eb8c2d;
`

export const Price = styled.h2 `
    margin: 2em auto;
    @media(min-width: 900px) {
        grid-area: price;
        font-size: 2rem;
        opacity: 0.8;
        margin-bottom: 1em;
        align-self: flex-end;
    }
`

export const Link = styled(ReachLink) `
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

    @media(min-width: 900px) {
        grid-area: order;
        display: inline;
        max-height: 20px;
    }
`