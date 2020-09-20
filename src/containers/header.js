import React, {useContext} from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'
import {FirebaseContext} from '../context/firebase'

export function HeaderContainer({ children }) {

    const {currentUser, signOut} = useContext(FirebaseContext)

    return (
        <Header>
            <Header.Logo 
                to={ROUTES.HOME} 
                src={require('../images/logo/rent24h-logo.png')}
                alt="RENT24H logo"
            />
            <Header.ButtonsContainer>
                <Header.ButtonLink to={ROUTES.ABOUT}> FAQ </Header.ButtonLink>
                { currentUser ?
                    <Header.ButtonLink onClick={signOut} to={ROUTES.HOME}> Sign out </Header.ButtonLink>
                : <Header.ButtonLink to={ROUTES.SIGN_IN}> Sign in </Header.ButtonLink>}
            </Header.ButtonsContainer>
        </Header>
    )
}