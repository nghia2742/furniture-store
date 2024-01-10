'use client';

import {
    getItemFromLocalStorage,
    setItemToLocalStorage,
} from '@/utils/localStorage';
import { createSlice } from '@reduxjs/toolkit';

export interface ProductState {
    wishlist: string[];
    cart: {
        id: string;
        quantity: number;
    }[];
}

const wishlistFromLocalStorage = getItemFromLocalStorage('wishlist');
const cartFromLocalStorage = getItemFromLocalStorage('cart');
const initialState: ProductState = {
    wishlist: wishlistFromLocalStorage
        ? (wishlistFromLocalStorage as string[])
        : [],
    cart: cartFromLocalStorage
        ? (cartFromLocalStorage as { id: string; quantity: number }[])
        : [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setWishlist: (state, action) => {
            const prod_id = action.payload;
            if (!state.wishlist.includes(prod_id)) {
                state.wishlist.push(prod_id);
                setItemToLocalStorage('wishlist', [...state.wishlist]);
            }
        },
        removeWishlist: (state, action) => {
            const prod_id = action.payload;
            const updatedWishlist = state.wishlist.filter(
                (item) => item !== prod_id
            );
            state.wishlist = updatedWishlist;
            setItemToLocalStorage('wishlist', updatedWishlist);
        },
        setCart: (state, action) => {
            const { id, quantity } = action.payload;

            const existingProductIndex = state.cart.findIndex(
                (item) => item.id === id
            );

            if (existingProductIndex === -1) {
                // If the product isn't in the cart, add it
                state.cart.push({ id, quantity: quantity?quantity:1 });
            } else {
                // If the product is in the cart, update its quantity
                state.cart[existingProductIndex].quantity = quantity;
            }

            // Update local storage after modifying the cart
            setItemToLocalStorage('cart', [...state.cart]);
        },
        removeCart: (state, action) => {
            const prod_id = action.payload;

            // Filter out the item with the matching ID
            const updatedCart = state.cart.filter(
                (item) => item.id !== prod_id
            );

            // Update the state's cart and local storage
            state.cart = updatedCart;
            setItemToLocalStorage('cart', updatedCart);
        },
    },
});

export const { setWishlist, removeWishlist, setCart, removeCart } =
    productSlice.actions;

export default productSlice.reducer;
