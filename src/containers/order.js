import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {CartContext} from '../context/cart'
import {Cars, Form, Spinner} from "../components"
import * as ROUTES from '../constants/routes'

export function OrderContainer () {

    const { selectedCar, 
            dateFrom, setDateFrom, 
            dateTo, setDateTo,
            driversName, setDriversName,
            phone, setPhone,
            location, setLocation,
            insurance, setInsurance } = useContext(CartContext)

    const [isLoading, setIsLoading] = useState(false)
    
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            history.push(ROUTES.CHECKOUT)
        }, 2000)

        
    }

    return (
        <>
        {selectedCar ? 
            <>
                <Cars>
                    <Cars.Item>
                        <Cars.Name> {selectedCar.name} </Cars.Name>
                        <Cars.Image src={selectedCar.imgUrl} />
                        <Cars.InfoList>
                            <Cars.InfoItem> 
                                <i class="ri-settings-5-fill"></i>
                                {selectedCar.transmission} 
                            </Cars.InfoItem>
                            <Cars.InfoItem> 
                                <i class="ri-user-3-fill"></i>
                                {selectedCar.seats} 
                            </Cars.InfoItem>
                            <Cars.InfoItem> 
                                <i class="ri-door-fill"></i>
                                {selectedCar.doors} 
                            </Cars.InfoItem>
                            <Cars.InfoItem> 
                                <i class="ri-suitcase-fill"></i>
                                {selectedCar.suitcases}
                            </Cars.InfoItem>
                        </Cars.InfoList>
                        <Cars.Price> {selectedCar.price}€ / day </Cars.Price>
                    </Cars.Item>
                    <Form>
                        <Form.Base onSubmit={handleSubmit}>
                            <Form.Title> Your order: </Form.Title>
                            <Form.Text> From </Form.Text>
                            <Form.Input
                                type="datetime-local"
                                value={dateFrom}
                                onChange={e => setDateFrom(e.target.value)}
                                required={true}
                            />
                            <Form.Text> To </Form.Text>
                            <Form.Input
                                type="datetime-local"
                                value={dateTo}
                                onChange={e => setDateTo(e.target.value)}
                                required={true}
                            />
                            <Form.Input 
                                type="text"
                                value={driversName}
                                onChange={e => setDriversName(e.target.value)}
                                placeholder="Drivers full name"
                                required={true}
                            />
                            <Form.Input 
                                value={phone}
                                placeholder="Phone number"
                                type="number"
                                onChange={e => setPhone(e.target.value)}
                            />
                            <Form.Input 
                                type="text"
                                value={location}
                                onChange={e => setLocation(e.target.value)}
                                placeholder="Delivery address"
                                required={true}
                            />
                            <Form.Select 
                                onChange={e => setInsurance(e.target.value)}
                                value={insurance}
                                required={true}
                            >
                                <option value="5">Regular insurance - 5 euros a day</option>
                                <option value="10">Premium insurance - 10 euros a day</option>
                            </Form.Select>
                            <Form.Submit> Order </Form.Submit>
                            <Spinner loading = {isLoading}/>
                        </Form.Base>
                    </Form>
                </Cars>

            </>
        : 
            <Cars>
                <Cars.Item>
                    <Cars.Name>Sorry there is nothing in your cart</Cars.Name>
                </Cars.Item>
            </Cars>
        }
        </>
    )
}