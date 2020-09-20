import React, {useState, createContext} from 'react'

const CartContext = createContext(null)

const CartContextProvider = ({children}) => {

    const [selectedCar, setSelectedCar] = useState()
    const [dateFrom, setDateFrom] = useState(new Date())
    const [dateTo, setDateTo] = useState(new Date())
    const [driversName, setDriversName] = useState('')
    const [phone, setPhone] = useState()
    const [location, setLocation] = useState('')
    const [insurance, setInsurance] = useState(5)



    return (
        <CartContext.Provider value = {{
            selectedCar, setSelectedCar, 
            dateFrom, setDateFrom, 
            dateTo, setDateTo,
            driversName, setDriversName,
            phone, setPhone,
            location, setLocation,
            insurance, setInsurance
        }}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContextProvider, CartContext}