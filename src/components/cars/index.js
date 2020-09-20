import React from 'react'
import {Container, Item, Name, Image, InfoList, InfoItem, Price, Link} from './styles/cars'

export default function Cars ( {children, ...restProps} ) {
    return (
        <Container {...restProps}> {children} </Container>
        )
}

Cars.Item = function CarsItem ( {children, ...restProps} ) {
    return <Item {...restProps}> {children} </Item>
}

Cars.Name = function CarsName ( {children, ...restProps} ) {
    return <Name {...restProps}> {children} </Name>
}

Cars.Image = function CarsImage ( {...restProps} ) {
    return <Image {...restProps} />
}

Cars.InfoList = function CarsInfoList ( {children, ...restProps} ) {
    return <InfoList {...restProps}> {children} </InfoList>
}

Cars.InfoItem = function CarsInfoItem ( {children, ...restProps} ) {
    return <InfoItem {...restProps}> {children} </InfoItem>
}

Cars.Price = function CarsPrice ( {children, ...restProps} ) {
    return <Price {...restProps}> {children} </Price>
}

Cars.Order = function CarsOrder ( {children, ...restProps} ) {
    return <Link {...restProps}> {children} </Link>
}