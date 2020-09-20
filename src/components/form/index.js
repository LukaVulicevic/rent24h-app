import React from 'react'
import {Container, Base, Title, Text, TextSmall, Link, Input, Select, Submit, Error} from './styles/form'


export default function Form ( {children, ...restProps} ) {

    return (
            <Container {...restProps}> 
                {children}
            </Container>
            )
}

Form.Base = function FormBase ( {children, ...restProps} ) {
    return <Base {...restProps}> {children} </Base>
}

Form.Title = function FormTitle ( {children, ...restProps} ) {
    return <Title> {children} </Title>
}

Form.Text = function FormText ( {children, ...restProps} ) {
    return <Text {...restProps}> {children} </Text>
}

Form.TextSmall = function FormTextSmall ( {children, ...restProps} ) {
    return <TextSmall {...restProps}> {children} </TextSmall>
}

Form.Link = function FormLink ( {children, ...restProps} ) {
    return <Link {...restProps}> {children} </Link>
}

Form.Input = function FormInput ( {...restProps} ) {
    return <Input {...restProps}></Input>
}

Form.Select = function FormSelect ( {children, ...restProps}) {
    return <Select> {children} </Select>
}

Form.Submit = function FormSubmit ( {children, ...restProps} ) {
    return <Submit {...restProps}> {children} </Submit>
}

Form.Error = function FormError ( {children, ...restProps} ) {
    return <Error {...restProps}> {children} </Error>
}

