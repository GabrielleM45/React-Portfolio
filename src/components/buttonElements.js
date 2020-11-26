import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)
`
    border-radius: 100px;
    background: ${({ primary }) => (primary ? 'transparent' : 'transparent')};

    white-space: nowrap;
    padding: ${({ big }) => (big ? '5px 5px' : '3px 3px' )};
    color: ${({ dark }) => (dark ? ' #143075' : '#fff' )};

    outline: none;
    border: #8993ad;
    cursor: pointer;
    display: center:
    justify-content: justify;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#8993ad')};
    }
`;