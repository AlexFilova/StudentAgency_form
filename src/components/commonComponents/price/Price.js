// import { useState } from "react";
import { PriceContainer, PriceBox } from "./style";
import PriceInput from "../selectAndInput/PriceInput";

const Price = () => { 

const prices = [5, 20, 30, 50, 100];

// const [selected, setSelected] = useState<boolean>(false)

    return (
        <PriceContainer>
            {prices.map(price => (
                <PriceBox key={price} value={price}>{`${price} €`}</PriceBox>
            ))}
            <PriceInput />
        </PriceContainer>
    );
}

export default Price;