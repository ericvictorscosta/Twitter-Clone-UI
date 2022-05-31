import React from "react"
import Button from "../Button"
import {
    Container,
    Topside,
    BorderLog,
    Logo,
    MenuButton,
    Botside,
    Avatar,
    ProfileData,
    // ==== Icons ======
    HomeIcon,
    ExploreIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    ExitApp,
} from "./styles"

export const Menubar: React.FC = () => {
    return (
        <Container>
            <Topside>
                <BorderLog>
                    <Logo />
                </BorderLog>
                <MenuButton>
                    <HomeIcon />
                    <span className="span_home">Home</span>
                </MenuButton>

                <MenuButton>
                    <ExploreIcon />
                    <span>Explore</span>
                </MenuButton>

                <MenuButton>
                    <BellIcon />
                    <span>Notifications</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon />
                    <span>Messages</span>
                </MenuButton>

                <MenuButton>
                    <FavoriteIcon />
                    <span>Favoritados</span>
                </MenuButton>

                <MenuButton>
                    <ProfileIcon className="active" />
                    <span>Profile</span>
                </MenuButton>

                <Button>
                    <span>Tweet</span>
                </Button>
            </Topside>
            <Botside>
                <Avatar />
                <ProfileData>
                    <strong>Eric Victor</strong>
                    <span>@ericvictorscosta</span>
                </ProfileData>
                <ExitApp />
            </Botside>
        </Container>
    )
}
