import { SelectBoxPrice, StyledInput } from "./style";

const PriceInput = () => {
    return (
    <SelectBoxPrice>
        <StyledInput
            style={{borderBottom: '1px solid black', width: '50px'}}
            type="text"
        />
    </SelectBoxPrice>
    );
}

export default PriceInput ;