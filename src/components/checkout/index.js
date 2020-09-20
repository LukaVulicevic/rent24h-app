import React from 'react'
import {Container, Inner, Title, Item, ItemName, ItemQuantity, ItemPrice, Form, CardInput, Btn, Input} from './styles/checkout'

export default function Checkout ( {children, ...restProps} ) {
    return (
        <Container {...restProps}> 
            <Inner>{children}</Inner> 
        </Container>
    )
}

Checkout.Title = function CheckoutTitle ({children, ...restProps}) {
    return (
        <Title {...restProps}> {children} </Title>
    )
}

Checkout.Item = function CheckoutItem ({children, ...restProps}) {
    return (
        <Item {...restProps}> {children} </Item>
    )
}

Checkout.ItemName = function CheckoutItemName ({children, ...restProps}) {
    return (
        <ItemName {...restProps}> {children} </ItemName>
    )
}

Checkout.ItemQuantity = function CheckoutItemQuantity ({children, ...restProps}) {
    return (
        <ItemQuantity {...restProps}> {children} </ItemQuantity>
    )
}

Checkout.ItemPrice = function CheckoutItemPrice ({children, ...restProps}) {
    return (
        <ItemPrice {...restProps}> {children} </ItemPrice>
    )
}

Checkout.Form = function CheckoutForm ({children, ...restProps}) {
    return (
        <Form {...restProps}> {children} </Form>
    )
}

Checkout.FormCardInput = function CheckoutCardInput ({...restProps}) {
    return (
        <CardInput {...restProps} />
    )
}

Checkout.FormBtn = function CheckoutFormBtn ({children, ...restProps}) {
    return (
        <Btn {...restProps}> {children} </Btn>
    )
}

Checkout.Input = function CheckoutInput ({...restProps}) {
    return (
        <Input {...restProps} />
    )
}