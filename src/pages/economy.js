import React from 'react'
import {HeaderContainer} from '../containers/header'
import {FooterContainer} from '../containers/footer'
import {CarsContainer} from '../containers/cars'

export default function Economy() {
    return (
        <>
            <HeaderContainer />
            <CarsContainer category="economy"/>
            <FooterContainer />
        </>
    )
}