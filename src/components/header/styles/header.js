import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Link = styled.p``

export const ButtonLink = styled(ReachRouterLink)`
    text-decoration: none;
    padding: 1em;
    text-transform: uppercase;
    color: #eb8c2d;
    font-weight: bold;
    letter-spacing: 1.4;

    &:hover {
        color: #e87909;
    }

    @media (min-width: 1449px) {
        font-size: 22px;
    }
`

export const Logo = styled.img`
    min-height: 100%;
    width: 125px;
    object-fit: cover;
    margin-left: 1em;
    
    @media (min-width: 1449px) {
        width: 200px;
        height: 150px;
        margin-left: 4em;
    }
`

export const ButtonsContainer = styled.div `
    width: 50%;
    display: flex;
    justify-content: space-evenly;

`