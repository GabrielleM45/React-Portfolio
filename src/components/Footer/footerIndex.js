import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { IconContext } from 'react-icons/lib'
import { FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconLink, SocialIcons } from './footerElements';
import { VscGithubInverted} from 'react-icons/vsc';
import { AiOutlineLinkedin } from 'react-icons/ai';

const FooterIndex = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
        };

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle></FooterLinkTitle>
                                <FooterLink to="about">About Me</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                            <FooterLinkTitle></FooterLinkTitle>
                                <FooterLink to="portfolio">Portfolio</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                            <FooterLinkTitle></FooterLinkTitle>
                            <FooterLink to='/contactMe'>Contact Me</FooterLink>
                            </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={ toggleHome }> GM  </SocialLogo>
                        <WebsiteRights> © {new Date().getFullYear()} All rights reserved  </WebsiteRights>
                    </SocialMediaWrap>

                <SocialMediaWrap>
                    <SocialIcons>
                        <SocialIconLink href="//github.com/GabrielleM45"
                            target="_blank"
                            aria-label="Github">
                            <VscGithubInverted/></SocialIconLink>

                            <SocialIconLink href="/"
                                target="_blank"
                                aria-label="Linkedin">
                            <AiOutlineLinkedin/> </SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                    </FooterWrapper>
                </FooterContainer>
        </IconContext.Provider>
    )
}

export default FooterIndex;