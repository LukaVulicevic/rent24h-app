import React, {useState, useEffect} from 'react'
import {createContext} from 'react'
import {auth} from '../firebase/firebase.utils'

const FirebaseContext = createContext(null)

function FirebaseContextProvider ({children}) {
    const [currentUser, setCurrentUser] = useState()

    useEffect( () => {
        auth.onAuthStateChanged( user => {
            if (user) {
                setCurrentUser(auth.currentUser)
            } else {
                setCurrentUser(null)
            }
        })
    }, [])

    const signOut = () => {
        auth.signOut()
    }

    return (
        <FirebaseContext.Provider value={{currentUser, signOut}}>
            {children}
        </FirebaseContext.Provider>
    )
}

export {FirebaseContextProvider, FirebaseContext}