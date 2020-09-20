import React from 'react'
import {Footer} from '../components'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Link href="https://github.com/LukaVulicevic">
                <i class="ri-github-fill"></i>
            </Footer.Link>
            <Footer.Link href="https://www.linkedin.com/in/luka-vuli%C4%8Devi%C4%87-b1ba0a1b1/">
                <i class="ri-linkedin-box-fill"></i>
            </Footer.Link>
        </Footer>
    )
}