import styled from 'styled-components';
import React, { Component } from 'react';
import NavBar from '../NavBar/navBarIndex';
import SideBar from '../SideBar/sideBarIndex';
import Pdf from '../Resume/Resume.pdf';

const ResumeStyle =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;

`;


class ResumeDoc extends Component {
        onResumeClick() {window.open(Pdf);
}

render() {

    return (
<>
    <SideBar />
        <NavBar />
            <ResumeStyle>
            <a onClick={this.onResumeClick}>
    Resume
   </a>
            </ResumeStyle>
</>
)
}
}

export default ResumeDoc;

