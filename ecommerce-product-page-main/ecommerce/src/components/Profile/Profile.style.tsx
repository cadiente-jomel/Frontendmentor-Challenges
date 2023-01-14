import styled from 'styled-components';


export const Profile = styled.img.attrs({
    src: '/assets/images/image-avatar.png'
})`
    width: 5rem;
    transition: all .5s ease;
    &:hover {
        border: 2px solid var(--color-primary-darker);
        border-radius: 50%;
    }
`