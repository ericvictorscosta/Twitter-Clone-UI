import React from "react"

import {
    Container,
    Retweeted,
    IconTwitter,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImgContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon,
} from "./styles"

export const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <IconTwitter />
                <p>Você Retweetou</p>
            </Retweeted>
            <Body>
                <Avatar />

                <Content>
                    <Header>
                        <strong>Creative Pack</strong>
                        <span>@creativepack</span>
                        <Dot />
                        <time>27 de abr</time>
                    </Header>
                    <Description>Venha Conhecer Nossa empresa!!</Description>

                    <ImgContent />

                    <Icons>
                        <Status>
                            <CommentIcon />
                            983
                        </Status>
                        <Status>
                            <RetweetIcon />
                            173
                        </Status>
                        <Status>
                            <LikeIcon />
                            743
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    )
}
