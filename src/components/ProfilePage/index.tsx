import React from "react"
import {
    Container,
    Banner,
    Avatar,
    ProfileData,
    Location,
    CakeIcon,
    Followage,
    EditButton,
} from "./styles"
import { Feed } from "../Feed/index"

export const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>

                <h1>Eric Victor</h1>
                <h2>@ericvictorscosta</h2>

                <p>
                    Developer at <a href="#">@Developer Task</a>
                </p>

                <ul>
                    <li>
                        <Location />
                        São Luis, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 16 de Novembro de 2003
                    </li>
                </ul>

                <Followage>
                    <span>
                        <strong>78</strong> Seguindo
                    </span>
                    <span>
                        <strong>102</strong> Seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Container>
    )
}
