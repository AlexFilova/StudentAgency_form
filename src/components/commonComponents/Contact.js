import PropTypes from 'prop-types';
import {StyledLink} from './style'

const Contact = ({link, linkContent}) => {

    return (
        <>
            <StyledLink href={link} target='_blank'>
                <p>{linkContent}</p>
            </StyledLink>
        </>
    );
}

Contact.propTypes = {
    link: PropTypes.string,
    linkContent: PropTypes.string,
};

export default Contact;