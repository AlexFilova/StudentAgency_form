import {ContainerFlag} from './style'

const Flag = ({style, phonePrefix}) => {
    return (
        <ContainerFlag style={style}>{phonePrefix}</ContainerFlag>
    );
}
 
export default Flag;