import React from "react"

import { Container, Item, Title } from "./styles"

interface Props {
    title: string
    elements: React.ReactNode[]
}
export const List: React.FC<Props> = ({ title, elements }) => {
    return (
        <Container>
            <Item>
                <Title>About</Title>
            </Item>

            {elements.map((element, index) => (
                <Item key={index}>{element}</Item>
            ))}
        </Container>
    )
}
