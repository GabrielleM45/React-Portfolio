import React from 'react';
import Icon1 from '../../assets/images/movia.png';
import Icon2 from '../../assets/images/trackbudget.png';
import Icon3 from '../../assets/images/workout.png';
import { PortfolioContainer, PortfolioH1, PortfolioWrapper, PortfolioIcon, PortfolioCard, PortfolioH2, PortfolioP , IconLink } from './portfolioElements';

const Portfolio = () => {
    return (
    <>
        <PortfolioContainer id="portfolio">
            <PortfolioH1>Portfolio</PortfolioH1>
            <PortfolioWrapper>

                <PortfolioCard>
                    <IconLink onClick={() => window.open('https://github.com/GabrielleM45/Movia')} >
                    <PortfolioIcon src={Icon1} type='image/png' /></IconLink>
                    <PortfolioH2>Movia</PortfolioH2>
                    <PortfolioP> This was the first group project. This application allows users to pass the time by taking a quick questionnaire about movie knowledge.</PortfolioP>
                </PortfolioCard>

                <PortfolioCard>
                    <IconLink onClick={() => window.open('https://github.com/GabrielleM45/Budget_Tracker')}>
                    <PortfolioIcon src={ Icon2 } type='image/png'/> </IconLink>
                    <PortfolioH2>Budget Tracker </PortfolioH2>
                    <PortfolioP> This application demonstrates a Progressive Web Application with the ability to access and fully utilize features while offline.  </PortfolioP>
                </PortfolioCard>

                <PortfolioCard>
                    <IconLink onClick={() => window.open('https://trackyobudget.herokuapp.com/')} >
                    <PortfolioIcon  src={ Icon3 } />
                    </IconLink>
                    <PortfolioH2>Work Out Tacer </PortfolioH2>
                    <PortfolioP> Users can log multiple workouts on a given day and then view a graph of their progress. This application has npm dependencies and requires the use of MongoDB.</PortfolioP>
                </PortfolioCard>

            </PortfolioWrapper>
        </PortfolioContainer>
</>
    );
};

export default Portfolio;