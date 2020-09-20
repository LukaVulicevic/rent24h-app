import React from 'react'
import {Panel} from '../components'
import categoriesData from "../fixtures/categories.json"

export function PanelContainer(){
    return (
        <Panel.Container>
            {categoriesData.map((category) => (
                <Panel key={category.id} direction={category.direction}>
                    <Panel.Pane>
                        <Panel.Title>{category.title}</Panel.Title>
                        <Panel.SubTitle>{category.subTitle}</Panel.SubTitle>
                    </Panel.Pane>
                    <Panel.Pane>
                        <Panel.Image src={category.image} alt={category.alt}/>
                    </Panel.Pane>
                    <Panel.Btn to={category.route}> Book now </Panel.Btn>
                </Panel>
            ))}
        </Panel.Container>
    )
}