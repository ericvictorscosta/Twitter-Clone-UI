import React from "react"
import { Main } from "../Main"
import { Menubar } from "../Menubar"
import { SideBar } from "../SideBar"
import { Container, Wrapper } from "./styles"

export const Layout: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Menubar />
                <Main />
                <SideBar />
            </Wrapper>
        </Container>
    )
}
