import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {Checkout, Spinner} from '../components'
import {CartContext} from '../context/cart'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import {firestore} from '../firebase/firebase.utils'
import * as ROUTES from '../constants/routes'

export function CheckoutContainer(){

    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    const {
        selectedCar,
        dateFrom, setDateFrom,
        dateTo, setDateTo,
        driversName, setDriversName,
        phone, setPhone,
        location, setLocation,
        insurance, setInsurance   } = useContext(CartContext)

    const getNumberOfDays = (firstDate, secondDate) => {
        const oneDay = 24 * 60 * 60 * 1000
        
        return Math.round(Math.abs((new Date(firstDate) - new Date(secondDate)) / oneDay))
    }

    const stripePromise = loadStripe('pk_test_51GwkiKCDAP5OrfdHiqDdThPtn0VMfSsKYDktZrGwkBlEniMMZzAAPZ4VMNgRRuXRcuFrBfSgRwZJyT5KvENJoIkF004KLxi9L3')
    const days = getNumberOfDays(dateFrom, dateTo)
    const total = ((insurance * days) + (days * selectedCar.price))


    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            firestore.collection('orders').add({
                driversName,
                phone,
                dateFrom,
                dateTo,
                location,
                insurance,
                total
            })

            setDriversName('')
            setDateFrom(new Date())
            setDateTo(new Date())
            setPhone()
            setLocation('')
            setInsurance(5)
            setIsLoading(false)
            history.push(ROUTES.HOME)
        }, 2000)
    }

    return (
        <Checkout>
            <Checkout.Title> Summary: </Checkout.Title>

            <Checkout.Item>
                <Checkout.ItemName>
                    {selectedCar.name}
                </Checkout.ItemName>
                <Checkout.ItemQuantity>
                    {days} days
                </Checkout.ItemQuantity>
                <Checkout.ItemPrice>
                    Total: {days * selectedCar.price} $
                </Checkout.ItemPrice>
            </Checkout.Item>

            <Checkout.Item>
                <Checkout.ItemName>
                    {insurance === 5 ? 'Regular insurance' : 'Premium insurance'}
                </Checkout.ItemName>
                <Checkout.ItemQuantity>
                    {days} days
                </Checkout.ItemQuantity>
                <Checkout.ItemPrice>
                    Total: {insurance * days} $
                </Checkout.ItemPrice>
            </Checkout.Item>

            <Elements stripe={stripePromise}>
                <Checkout.Form onSubmit={handleSubmit}>
                    <Checkout.Input 
                        value={driversName}
                        placeholder="Full name"
                        onChange={e => setDriversName(e.target.value)}
                        required={true}
                    />
                    <Checkout.Input 
                        value={location}
                        placeholder="Address"
                        onChange={e => setLocation(e.target.value)}
                        required={true}
                    />
                    <Checkout.Input 
                        value={phone}
                        placeholder="Phone number"
                        type="number"
                        onChange={e => setPhone(e.target.value)}
                        required={true}
                    />
                    <Checkout.FormCardInput />
                    <Checkout.FormBtn> Pay {total} $</Checkout.FormBtn>
                </Checkout.Form>
                <Spinner loading = {isLoading}/>
            </Elements>
        </Checkout>
    )
}