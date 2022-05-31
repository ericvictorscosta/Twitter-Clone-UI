import styled, { css } from "styled-components"
import {
    HomeCircle,
    Notifications,
    Hash,
    Email,
    FavoriteBorder,
    Person,
    Twitter,
    Exit,
} from "../../styles/icons"

export const Container = styled.div`
    display: none;

    @media (min-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        position: sticky;
        top: 0;
        left: 0;

        padding: 9px 19px 20px;

        max-height: 100vh;
        overflow-y: auto;
    }
`

export const Topside = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1280px) {
        align-items: flex-start;
    }
`
export const BorderLog = styled.div`
    padding: 10px;
    border-radius: 50%;
    margin-bottom: 20px;

    &:hover {
        background: rgba(29, 155, 240, 0.1);
    }
`

export const Logo = styled(Twitter)`
    width: 40px;
    height: 40px;

    > path {
        fill: var(--twitter-icon);
        cursor: pointer;
    }
`
export const MenuButton = styled.button`
    display: flex;
    align-items: center;
    flex-shrink: 0;

    > span {
        display: none;
    }

    @media (min-width: 1280px) {
        padding-left: 17px;
        padding-right: 17px;

        size-adjust: initial;
        .span_home {
            font-weight: bold;
        }
        span {
            display: inline;
            margin-left: 19px;
            font-weight: 400;
            font-size: 19px;
        }
    }

    padding: 8.25px 0;
    outline: 0;

    & + button {
        margin-top: 16.5px;
    }

    & + button:last-child {
        margin-top: 33px;

        width: 40px;
        height: 40px;

        > span {
            display: none;
        }
        @media (min-width: 1280px) {
            width: 100%;
            height: unset;

            > span {
                display: inline;
            }
        }
    }

    cursor: pointer;
    border-radius: 25px;

    &:hover {
        background: var(--twitter-dark-hover);
    }
    &:hover,
    &:active {
        span,
        svg {
            color: var(--twitter);
            fill: var(--twitter);
        }
    }
`

const iconCSS = css`
    flex-shrink: 0;

    width: 30px;
    height: 30px;
    color: var(--white);
`

export const HomeIcon = styled(HomeCircle)`
    ${iconCSS}
`
export const ExploreIcon = styled(Hash)`
    ${iconCSS}
`
export const BellIcon = styled(Notifications)`
    ${iconCSS}
`
export const EmailIcon = styled(Email)`
    ${iconCSS}
`
export const FavoriteIcon = styled(FavoriteBorder)`
    ${iconCSS}
`
export const ProfileIcon = styled(Person)`
    ${iconCSS}
`
export const Botside = styled.div`
    margin-top: 20px;

    display: flex;
    align-items: center;
`
export const Avatar = styled.div`
    width: 39px;
    height: 39px;

    flex-shrink: 0;
    border-radius: 50%;
    background: var(--gray);
`
export const ProfileData = styled.div`
    display: none;

    @media (min-width: 1280px) {
        display: flex;
        flex-direction: column;

        margin-left: 10px;
        font-size: 14px;

        > span {
            color: var(--gray);
        }
    } ;
`
export const ExitApp = styled(Exit)`
    display: none;

    @media (min-width: 1280px) {
        display: inline-block;
        width: 25px;
        height: 25px;

        color: var(--white);
        margin-left: 30px;
        cursor: pointer;

        &:hover {
            > path {
                color: var(--like);
            }
        }
    } ;
`
