import React, { useEffect } from 'react';
import Pdf from '../Resume/Resume.pdf';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, SubTitle, ImgWrapper, Img, BtnWrapper, IndexBtnLink } from './InfoElements';

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headLine, description, darkText, img, alt, buttonLabel2, primary, dark, dark2 }) => {


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

            <BtnWrapper>
                <IndexBtnLink
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    onClick={() => window.open( Pdf )} >
                    { buttonLabel2 }
                    </IndexBtnLink>
                </BtnWrapper>

                        </TextWrapper>

                </Column1>
                    <Column2>
                            <ImgWrapper>
                                <Img src={`${ img }`} alt={alt} />
                            </ImgWrapper>

                    </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
</>
);
};
export default InfoSection;