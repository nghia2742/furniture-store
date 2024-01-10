export type ProductProp = {
    _id: string;
    id: number;
    name: string;
    price: number;
    image: string;
};

export type CardProps = {
    product: ProductProp;
};