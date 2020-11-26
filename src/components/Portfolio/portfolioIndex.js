import React from 'react';
import Icon1 from '../../assets/images/movia.png';
import Icon2 from '../../assets/images/trackbudget.png';
import Icon3 from '../../assets/images/workout.png';
import { PortfolioContainer, PortfolioH1, PortfolioWrapper, PortfolioIcon, PortfolioCard, PortfolioH2, PortfolioP } from './portfolioElements';

const Portfolio = () => {
    return (
        <PortfolioContainer id="portfolio">
            <PortfolioH1>Portfolio</PortfolioH1>
            <PortfolioWrapper>

                <PortfolioCard>
                    <PortfolioIcon src={ Icon1 } type='image/png' />
                    <PortfolioH2>Movia</PortfolioH2>
                    <PortfolioP> This was the first group project. This application allows users to pass the time by taking a quick questionnaire about movie knowledge.</PortfolioP>
                </PortfolioCard>

                <PortfolioCard>
                    <PortfolioIcon src={ Icon2 } type='image/png'/>
                    <PortfolioH2>Budget Tracker </PortfolioH2>
                    <PortfolioP>The boiler plate code was provided by DU Full Stack Bootcamp. Students were responsible for refactoring the code to convert the original application to a Progressive Web Application demonstrating the ability to access and fully utilize the application while offline.  </PortfolioP>
                </PortfolioCard>

                <PortfolioCard>
                    <PortfolioIcon src={ Icon3 } type='image/png' />
                    <PortfolioH2>Work Out Tacer </PortfolioH2>
                    <PortfolioP> This application provides a platform for users to enter and track daily workouts. Users can log multiple workouts on a given day and then view a graph of their progress. This application has npm dependencies and requires the use of MongoDB.</PortfolioP>
                </PortfolioCard>

            </PortfolioWrapper>
        </PortfolioContainer>
    );
};

export default Portfolio;