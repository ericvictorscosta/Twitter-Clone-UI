import React from "react"
import StickyBox from "react-sticky-box"

import { List } from "../List"
import { FollowSuggestion } from "../FollowSuggestion"
import { News } from "../News"

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from "./styles"

export function SideBar() {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Search on Twitter" />
                <SearchIcon />
            </SearchWrapper>
            <StickyBox>
                <Body>
                    <List
                        title="Talvez você curta"
                        elements={[
                            <FollowSuggestion
                                name="Rodrigo Santana"
                                nickname="@digosantana"
                            />,
                            <FollowSuggestion
                                name="Francyellen Correa"
                                nickname="@h0_ellen"
                            />,
                            <FollowSuggestion
                                name="Manoel Silva"
                                nickname="@onetooh"
                            />,
                        ]}
                    />
                    <List
                        title="Talvez você curta"
                        elements={[<News />, <News />, <News />]}
                    />
                    <List
                        title="Talvez você curta"
                        elements={[<News />, <News />, <News />]}
                    />
                    <List
                        title="Talvez você curta"
                        elements={[<News />, <News />, <News />]}
                    />
                    <List
                        title="Talvez você curta"
                        elements={[<News />, <News />, <News />]}
                    />
                </Body>
            </StickyBox>
        </Container>
    )
}
