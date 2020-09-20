import React, { useState} from 'react'
import { useHistory } from 'react-router-dom'
import {Form} from '../components'
import {HeaderContainer} from '../containers/header'
import {FooterContainer} from '../containers/footer'
import * as ROUTES from '../constants/routes'
import {auth} from '../firebase/firebase.utils'

export default function Signup () {
    const history = useHistory()
    const [firstName, setFirstName] = useState('')
    const [error, setError] = useState('')
    const [emailAddress, setEmailAdress] = useState('')
    const [password, setPassword] = useState('')

    const isValid = firstName === '' | emailAddress === '' | password === ''

    const handleSubmit = (event) => {
        event.preventDefault()
        
        auth
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => 
                result.user
                .updateProfile({
                    displayName: firstName
                })
                .then(() => {
                    setEmailAdress('')
                    setPassword('')
                    setError('')
                    history.push(ROUTES.HOME)
                })
            ).catch ((error) => setError(error.message))
    }

    return (
        <>
            <HeaderContainer/>
            <Form>
                <Form.Base onSubmit={handleSubmit} method='POST'>
                    <Form.Title>Sign up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Input 
                        placeholder="First name"
                        type="text"
                        value={firstName}
                        onChange={({target}) => setFirstName(target.value)}
                    />
                    <Form.Input 
                        placeholder="Email address"
                        type="email"
                        value={emailAddress}
                        onChange={({target}) => setEmailAdress(target.value)}
                    />
                    <Form.Input 
                        value={password}
                        onChange={({target}) => setPassword(target.value)}
                        autoComplete="off"
                        type="password"
                        placeholder="Password"
                    />
                    <Form.Submit disabled={isValid} type="submit">
                        Sign up
                    </Form.Submit>

                    <Form.Text>
                        Already have an account? <Form.Link to={ROUTES.SIGN_IN}>Sign in</Form.Link> 
                    </Form.Text>
                    <Form.TextSmall>
                        Please use unique password.
                    </Form.TextSmall>
                    </Form.Base>
            </Form>
            <FooterContainer/>
        </>
    )
}