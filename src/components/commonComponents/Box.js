import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import {StyledBox, StyledLinkDiv} from './style'
import {BoxParagraphFont, BoxTitleFont} from '../../styles/fontStyles'
import Contact from './Contact';

export const FooterBox = ({title, boxContent}) => {
    
    return ( 
        <StyledBox>
            <BoxTitleFont>{title}</BoxTitleFont>
            <BoxParagraphFont>{boxContent}</BoxParagraphFont>
        </StyledBox>
     );
};

FooterBox.propTypes = {
    title: PropTypes.string,
    boxContent: PropTypes.string,
};


export const FooterLinksBox = ({title}) => {

    const { t } = useTranslation();
    
    return ( 
        <StyledBox>
            <BoxTitleFont>{title}</BoxTitleFont>
            <StyledLinkDiv>
                <Contact
                    link={`tel: ${t('footer.contactsContent.contactNumber')}`}
                    linkContent={t('footer.contactsContent.contactNumber')}
                />
                <Contact
                    link={`mailto: ${t('footer.contactsContent.contactEmail')}`}
                    linkContent={t('footer.contactsContent.contactEmail')}
                />
                <Contact
                    link={'https://www.google.com/maps/place/Pra%C5%BEsk%C3%A1+3,+811+04+Bratislava/@48.1559174,17.1031308,17z/data=!3m1!4b1!4m5!3m4!1s0x476c89ae010d4537:0x759289a4926eecb0!8m2!3d48.1559174!4d17.1053195'}
                    linkContent={t('footer.contactsContent.contactAddressBA')}
                />
                <Contact
                    link={'https://www.google.com/maps/place/%C5%A0t%C3%BArova+9%2F18,+040+01+Ko%C5%A1ice/@48.7160603,21.2554338,17z/data=!3m1!4b1!4m5!3m4!1s0x473ee071c6f1b22b:0x890dfae41f12f08!8m2!3d48.7160568!4d21.2576225'}
                    linkContent={t('footer.contactsContent.contactAddressKE')}
                />
            </StyledLinkDiv>
        </StyledBox>
     );
};

FooterLinksBox.propTypes = {
    title: PropTypes.string,
};
