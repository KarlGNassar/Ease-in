import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksWrapper,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    WebsiteRights
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>

                            <FooterLink href='https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373' target='_blank'>Public API</FooterLink>
                            <FooterLink>Investors</FooterLink>
                            <FooterLink>Terms of Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>

                            <FooterLink href="mailto:kgnassar01@gmail.com" target="_blank">Contact</FooterLink>
                            <FooterLink href="mailto:kgnassar01@gmail.com" target="_blank">Support</FooterLink>
                            <FooterLink href="mailto:kgnassar01@gmail.com" target="_blank">Sponsorships</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Media</FooterLinkTitle>

                            <FooterLink href="mailto:kgnassar01@gmail.com" target="_blank">Submit Image</FooterLink>
                            <FooterLink href="mailto:kgnassar01@gmail.com" target="_blank">Submit Video</FooterLink>
                            <FooterLink href="mailto:kgnassar01@gmail.com" target="_blank">Influencer</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>

                            <FooterLink href="https://www.instagram.com/karlnassar1/" target="_blank">Instagram</FooterLink>
                            <FooterLink href="https://github.com/KarlGNassar" target="_blank">GitHub</FooterLink>
                            <FooterLink href="https://www.linkedin.com/in/karl-nassar-2296a3202/" target="_blank">Linkedin</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Ease-in
                        </SocialLogo>

                        <WebsiteRights>ease-in &copy; {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>

                        <SocialIcons>
                            <SocialIconLink href="https://www.instagram.com/karlnassar1/" target='_blank' arial-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://github.com/KarlGNassar" target='_blank' arial-label='GitHub'>
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.linkedin.com/in/karl-nassar-2296a3202/' target='_blank' arial-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                        
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
