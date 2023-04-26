import React from "react";
import { 
    Container,
    ProductPhotoArea,
    ProductInfoArea,
    ProductButtonArea,
    ProductProto,
    ProductName,
    ProductPrice,
    ProductIngredients,
    ProductuButton
} from './styled';

export default ({data, onClick}) => {

    const handleClick = ()=> {
        onClick(data);
    }

    return (
        <Container onClick={handleClick}>
            <ProductPhotoArea>
                <ProductProto src={data.image} />
            </ProductPhotoArea>
            <ProductInfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>R$ {data.price}</ProductPrice>
                <ProductIngredients>{data.ingredients}</ProductIngredients>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductuButton src="/assets/next.png" />
            </ProductButtonArea>
        </Container>
    );
}