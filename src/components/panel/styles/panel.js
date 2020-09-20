import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({direction}) => direction};
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`

export const Pane = styled.div`
    width: 33%;
    
    @media (max-width: 1000px) {
        width: 100%;
        padding: 0 45px;
        text-align: center;
    }
`;

export const Category = styled.div`
    display: flex;
    border-bottom: 1px solid #eb8c2d;
    padding: 50px 5%;
    color: white;
    overflow: hidden;
    &:last-child {
        border:none;
    }
`;

export const Container = styled.section`
    background-color: #1c1c1c;
    

    @media (max-width: 1000px) {
        ${Category}:last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 8px;
    color: #dedede;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
    font-size: 22px;
    font-weight: normal;
    line-height: normal;
    color: #dedede;
    
    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;

export const Button = styled(Link)`
    background-color: #eb8c2d;
    padding: 1em 2em;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1.6;
    color: #dedede;

    @media (max-width: 600px){
        margin-top: 2em;
    }
    

    &:hover {
        background-color: #e87909;
    }
`