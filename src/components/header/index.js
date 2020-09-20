import React from 'react'
import {Link as ReachRouterLink} from 'react-router-dom'
import { Container, Logo, ButtonLink, ButtonsContainer} from './styles/header'

export default function Header ({ children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}



Header.Logo = function HeaderLogo ({to, ...restProps}) {
    return  (
            <ReachRouterLink to={to}>
                <Logo  {...restProps}/>
            </ReachRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink ({ children,  ...restProps}) {
    return <ButtonLink {...restProps}> {children} </ButtonLink>
}

Header.ButtonsContainer = function HeaderButtonsContainer ({ children, ...restProps}) {
    return (
        <ButtonsContainer {...restProps}> {children} </ButtonsContainer>
    )
}