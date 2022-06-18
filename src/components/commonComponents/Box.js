import PropTypes from 'prop-types';
import {StyledBox} from './style'
import {BoxParagraphFont, BoxTitleFont} from '../../styles/fontStyles'

const Box = ({title, boxContent}) => {
    
    return ( 
        <StyledBox>
                <BoxTitleFont>{title}</BoxTitleFont>
                <BoxParagraphFont>{boxContent}</BoxParagraphFont>
        </StyledBox>
     );
}

Box.propTypes = {
    title: PropTypes.string,
    boxContent: PropTypes.string,
};

export default Box;