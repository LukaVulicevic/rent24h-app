import React from 'react'
import {Container} from './styles/spinner'
import {Ring} from 'react-awesome-spinners'

export default function Spinner ({loading, ...restProps}) {
    return (
        loading &&
        <Container>
            <Ring 
                color = "#eb8c2d"
                size = {100}
                sizeUnit = "px"
            />
        </Container>
    )
}