import { LogoContainer } from "./style";
import Logo from './../../images/logo_You_CanDoThis.svg';
import { useTranslation } from "react-i18next";

const LogoComponent = () => {

    const { t } = useTranslation();

    return ( 
            <LogoContainer>
                <img src={Logo} alt={t('imagesAlt.logo')} width={80} height={50} />
            </LogoContainer>
    );
}

export default LogoComponent;