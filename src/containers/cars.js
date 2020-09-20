import React, {useContext} from "react"
import {Cars} from "../components"
import * as ROUTES from '../constants/routes'
import {CartContext} from '../context/cart'
import {FirebaseContext} from '../context/firebase'
import {useContent} from '../hooks'

export function CarsContainer ( {category} ) {
    const {cars} = useContent('cars')
    const filteredData = cars.filter( car => car.category === category)
    const {setSelectedCar} = useContext(CartContext)
    const {currentUser} = useContext(FirebaseContext)

    return (
        <Cars>
        {filteredData.map ( car => (
            <Cars.Item key={car.id}>
                <Cars.Name> {car.name} </Cars.Name>
                <Cars.Image src={car.imgUrl} />
                <Cars.InfoList>
                    <Cars.InfoItem> 
                        <i class="ri-settings-5-fill"></i>
                        {car.transmission} 
                    </Cars.InfoItem>
                    <Cars.InfoItem> 
                        <i class="ri-user-3-fill"></i>
                        {car.seats} 
                    </Cars.InfoItem>
                    <Cars.InfoItem> 
                        <i class="ri-door-fill"></i>
                        {car.doors} 
                    </Cars.InfoItem>
                    <Cars.InfoItem> 
                        <i class="ri-suitcase-fill"></i>
                        {car.suitcases}
                    </Cars.InfoItem>
                </Cars.InfoList>
                <Cars.Price> {car.price}€ / day </Cars.Price>
                <Cars.Order to={currentUser ? ROUTES.ORDER : ROUTES.SIGN_IN} onClick={() => setSelectedCar(car)}> Order </Cars.Order>
            </Cars.Item>
        ))}
        </Cars>
    )
}