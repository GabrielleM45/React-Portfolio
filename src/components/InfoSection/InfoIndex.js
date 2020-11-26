import React from 'react';
import { Button } from '../buttonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, SubTitle, ImgWrapper, Img, buttonLabel } from './InfoElements';

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headLine, description, darkText, img, alt, buttonLabel, }) => {

    return (
<>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <SubTitle darkText={darkText}>{description}</SubTitle>
                        <Button to="/contactMe" smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                        </Button>
                            {buttonLabel}
                        </TextWrapper>
                </Column1>
                    <Column2>
                            <ImgWrapper>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                    </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
</>
);
};
export default InfoSection;