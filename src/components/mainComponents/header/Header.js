import {useTranslation} from 'react-i18next';
import { 
    StyledHeaderSection,
    StyledHeaderElement,
    StyledIcon,
    StyledTranslator,
    StyledLink,
    StyledButtonLang,
} from "./style";
import {StyledContainer} from '../../../styles/styles'
import {FaFacebookF, FaInstagram} from 'react-icons/fa';
import {white, darkOrange, darkgrey} from "../../../styles/colors";
import {LogoHeader} from "../../commonComponents/Logo";

const Header = () => {

    const lngs = {
        sk: {nativeName: 'Sk'},
        en: {nativeName: 'En'}
      };

    const {i18n} = useTranslation();
    const resolved =  i18n.resolvedLanguage;

    return (
            <StyledHeaderSection>
                <StyledContainer>
                    <StyledHeaderElement>
                        <LogoHeader />
                    </StyledHeaderElement>
                    <StyledHeaderElement>
                        <StyledIcon>
                            <StyledLink href="https://www.facebook.com" target='_blank'>
                                <FaFacebookF />
                            </StyledLink>
                        </StyledIcon>
                        <StyledIcon>
                            <StyledLink href="https://www.instagram.com" target='_blank'>
                                <FaInstagram />
                            </StyledLink> 
                        </StyledIcon>
                        <StyledTranslator>
                            {Object.keys(lngs).map((lng) => (
                                <StyledButtonLang 
                                    key={lng}
                                    style={{
                                        width: resolved === lng ? '30px' :'20px',
                                        height: resolved === lng ? '30px' :'20px',
                                        color: resolved === lng ? `${white}` : `${darkgrey}`,
                                        borderRadius:'50%',
                                        border: resolved === lng ? 'none' : `1.3px solid ${darkgrey}`,
                                        padding: '0',
                                        fontSize: '.6rem',
                                        backgroundColor: resolved === lng ? `${darkOrange}` : 'transparent',
                                        fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
                                        boxShadow: resolved === lng ? 'rgb(0 0 0 / 15%) 0px 6px 7px 2px' : 'none',
                                    }}
                                    type="submit"
                                    onClick={() => i18n.changeLanguage(lng)}
                                >
                                    {lngs[lng].nativeName}
                                </StyledButtonLang>
                            ))}
                        </StyledTranslator>
                        
                    </StyledHeaderElement>
                </StyledContainer>
            </StyledHeaderSection>   
    );
}

export default Header;