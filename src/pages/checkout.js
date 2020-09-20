import React from 'react'
import {HeaderContainer} from '../containers/header'
import {FooterContainer} from '../containers/footer'
import {CheckoutContainer} from '../containers/checkout'

export default function Checkout () {
    return (
        <>
            <HeaderContainer />
            <CheckoutContainer />
            <FooterContainer />
        </>
    )
}