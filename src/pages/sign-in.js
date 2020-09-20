import React, {useState} from 'react'
import {Form} from '../components'
import {useHistory} from 'react-router-dom'
import {HeaderContainer} from '../containers/header'
import {FooterContainer} from '../containers/footer'
import * as ROUTES from '../constants/routes'
import {auth} from '../firebase/firebase.utils'

export default function Signin() {
const history = useHistory()    
const [error, setError] = useState('')
const [emailAddress, setEmailAdress] = useState('')
const [password, setPassword] = useState('')

const isValid = password === '' | emailAddress === ''

const handleSignin = (event) => {
    event.preventDefault()

    auth
        .signInWithEmailAndPassword(emailAddress, password)
        .then( () => {
            setEmailAdress('')
            setPassword('')
            setError('')
            history.goBack(1)
        })
        .catch(error => setError(error.message))
}

return (
        <>
            <HeaderContainer />
            <Form>
                <Form.Base onSubmit={handleSignin} method='POST'>
                    <Form.Title>Sign in</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
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
                        placeholder="password"
                    />
                    <Form.Submit disabled={isValid} type="submit">
                        Sign in
                    </Form.Submit>

                    <Form.Text>
                        Don't have an account? <Form.Link to={ROUTES.SIGN_UP}>Sign up</Form.Link> 
                    </Form.Text>
                    <Form.TextSmall>
                        Please use unique password.
                    </Form.TextSmall>
                </Form.Base>
            </Form>
            <FooterContainer />
        </>
    )
}