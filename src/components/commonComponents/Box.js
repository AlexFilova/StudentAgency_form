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

export default Box ;