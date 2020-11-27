import styled from 'styled-components';
import { Link as LinkRoute } from 'react-router-dom';

export const InfoContainer = styled.div `

    ${'' /* item-align: center;
    text-align: center; */}
    color: #2f3136;

    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#2f3136' )};

    @media screen and (max-width: 768px) {
        padding: 100px 0px;
    }
`
export const InfoWrapper = styled.div `
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`
export const InfoRow = styled.div `
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) =>  imgStart ? "'col2 col1'" : "'col1 col2'"};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) =>  imgStart ?
        `
'col1'
'col2'
` : `
'col1 col1'
'col2 col2'
`}
}
`
export const Column1 = styled.div `
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div `
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`
export const TextWrapper = styled.div `
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`
export const TopLine = styled.p `
    color: #99bcc4;
    fonnt-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    font-family: 'Josifin Sans';
`
export const Heading = styled.h1 `
    margin-bottom: 24px;
    font-size: 48px;
    font-family: 'Josifin Sans';
    line-height: 1.1;
    font-weight: 400;
    color: ${({ lightText }) => (lightText ? '#f9f9f9' : '#2f3136' )};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const SubTitle = styled.p `
    max-width: 440px;
    margin-bottom: 35px;
    font-family: 'Josefin Sans';
    font-size: 18px;
    line-height: 24px;
    color: #242424;
    color: ${({ darkText }) => (darkText ? '#2f3136' : '#fff')};
`
export const BtnWrapper = styled.div `
    display: flex;
    justify-content: flex-start;
`
export const PortButton = styled.button `
    background: #01bf71;
    padding: 8px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
`
export const IndexBtnLink = styled(LinkRoute)
`

    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;


    &:hover {
        border-radius: 50px;
        white-space: nowrap;
        padding: 10px 22px;
        background: ${({ primary }) => (primary ? '#ffffff' : '#8993ad')};
        transition: all 0.2s ease-in-out;
        background: #99bcc4;

`;
export const ImgWrapper = styled.div `
    max-width: 555px;
    height: 100%;
`
export const Img = styled.img `
    width: 70%;
    height: 60%;
    margin: 0 0 10px 0 10px;
    padding-right: 0;
`