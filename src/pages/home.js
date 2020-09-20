import React from 'react'
import {PanelContainer} from '../containers/panel'
import {FooterContainer} from '../containers/footer'
import {HeaderContainer} from '../containers/header'

export default function Home() {
    return (
        <>
            <HeaderContainer/>
            <PanelContainer />
            <FooterContainer />
        </>
    )
}