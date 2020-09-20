import React from 'react'
import {HeaderContainer} from '../containers/header'
import {FooterContainer} from '../containers/footer'
import {CarsContainer} from '../containers/cars'

export default function Regular() {
    return (
        <>
            <HeaderContainer />
            <CarsContainer category="regular"/>
            <FooterContainer />
        </>
    )
}