import {useTranslation} from "react-i18next";
import {StyledHeaderLogoContainer, StyledFooterLogoContainer, StyledLogoImg} from "./style";
import Logo from './../../images/logo_You_CanDoThis.svg';
import {useNavigate} from 'react-router-dom';

export const LogoHeader = () => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    return ( 
            <StyledHeaderLogoContainer onClick={() => {navigate('/')}}>
                <StyledLogoImg src={Logo} alt={t('imagesAlt.logo')} />
            </StyledHeaderLogoContainer>
    );
};

export const LogoFooter = () => {

    const { t } = useTranslation();

    return ( 
            <StyledFooterLogoContainer>
                <StyledLogoImg src={Logo} alt={t('imagesAlt.logo')} width={80} height={50} />
            </StyledFooterLogoContainer>
    );
}