import React from 'react'
import { Container, Link } from './styles/footer'

export default function Footer ({ children, ...restProps}) {
    return <Container {...restProps}> {children} </Container>
}

Footer.Link = function FooterLink ({ children, ...restProps}) {
    return <Link {...restProps}> {children} </Link>
}