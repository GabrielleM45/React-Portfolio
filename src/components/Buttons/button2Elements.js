import styled from 'styled-components';
import { Link as LinkRoute } from 'react-scroll';

export const Button2 = styled(LinkRoute)
`
    background: ${({ primary }) => (primary ? '#8993ad' : '#404c6e')};
    border-radius: 50px;
    white-space: nowrap;
    padding: 10px 22px;

    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;


    &:hover {
        background: ${({ primary }) => (primary ? '#ffffff' : '#8993ad')};
        transition: all 0.2s ease-in-out;
        background: #99bcc4;
    }
`



