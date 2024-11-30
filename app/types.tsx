export type ProductProp = {
    id: string;
    name: string;
    price: number;
    image: string;
};

export type CardProps = {
    product: ProductProp;
};