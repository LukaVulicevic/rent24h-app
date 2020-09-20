import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    max-width: 1000px;
    margin: auto;
    justify-content: center;
    align-items: center;
    height: 10vh;
`

export const Link = styled.a`
    font-size: 2rem;
    margin: 1rem;
    text-decoration: none;
    color: #eb8c2d;
    &:hover {
        color: #e87909;
    }
`