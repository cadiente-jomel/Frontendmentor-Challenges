import styled from "styled-components";

interface Props {
  isClicked: boolean,
}
export const OverlayContainer = styled.div`
    margin: 0 auto;
    height: 100vh;
    width: ${(props: Props) => props.isClicked ? "100vw" : "0vw"};
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.9);
    overflow-x: hidden;
    transition: 0.5s;
`;


export const InnerCarouselContainer = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`