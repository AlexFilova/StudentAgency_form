import PropTypes from 'prop-types';
import {StyledLink} from './style';
import {BoxParagraphFont} from '../../styles/fontStyles';

const Contact = ({link, linkContent}) => {

    return (
        <>
            <StyledLink href={link} target='_blank'>
                <BoxParagraphFont>{linkContent}</BoxParagraphFont>
            </StyledLink>
        </>
    );
}

Contact.propTypes = {
    link: PropTypes.string,
    linkContent: PropTypes.string,
};

export default Contact;