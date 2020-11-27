import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Background = styled.div`
background-color: #081d47;
`

export const ContactContainer = styled.div `
    min-height: 692px;
    ${'' /* position: fixed; */}
    bottom: 0;
    left: 0;
    rigth: 0;
    top: 0;
    z-index: 1;
    overflow: hidden;
    background: linear-gradient(108deg, rgba(1, 147, 86, 1) 0% rgba(10, 201, 122, 1) 100%);
`
export const ContactFormWrap = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`
export const ContactIcon = styled(Link)
`
        margin-left: 32px;
        margin-top: 32px;
        text-decoration: none;
        color: #242424;
        font-weight: 700px;
        font-size: 32px;
        font-family: 'Allura', cursive;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`
export const FormContent = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`
export const ContactForm = styled.form `
    background: #2f3136;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 480px) {
        padding: 32px 32px;
    }
`
export const ContactFormH1 = styled.h1 `
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400px;
    text-align: center;
`
export const ContactFormLabel = styled.label `
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`
export const ContactFormInput = styled.input `
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`
export const FormButton = styled.button `
    background: #99bcc4;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`
export const Text = styled.span `
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`