import React from 'react'
import { Container, Category, Inner, Title, SubTitle, Image, Pane, Button } from './styles/panel';

export default function Panel ({children, direction="row", ...restProps}) {
    return (
        <Category {...restProps}>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Category>
    )
}

Panel.Container = function PanelContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Panel.Title = function PanelTitle({ children, ...restProps}){
    return <Title {...restProps}> {children} </Title>
}

Panel.SubTitle = function PanelSubtitle ({children, ...restProps}) {
    return <SubTitle {...restProps}> {children} </SubTitle>
}

Panel.Pane = function PanelPane ({children, ...restProps}) {
    return <Pane {...restProps}> {children} </Pane>
}

Panel.Image = function PanelImage ({...restProps}) {
    return <Image {...restProps}/>
}

Panel.Btn = function PanelBtn ({ children, ...restProps}) {
    return <Button {...restProps}> {children} </Button>
}