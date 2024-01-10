'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { getProductDetail } from '@/app/actions';
import CardDetailSkeleton from '../loading/CardDetailSkeleton';
import { ProductProp } from '@/app/types';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@/lib/store';
import { setCart, setWishlist } from '@/lib/features/productSlice';
import { setToast } from '@/lib/features/appSlice';
import MyToast from '../MyToast';

function CardDetail({ slug }: { slug: string }) {
    const [product, setProduct] = useState<ProductProp | null>(null);
    const [notfound, setNotfound] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const isToast = useSelector((state: AppState) => state.app.toast);
    const dispatch = useDispatch();
    const wishlist = useSelector(
        (state: AppState) => state.product.wishlist
    );

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await getProductDetail(slug);
            setProduct(response);
            if (!response) {
                setNotfound(true);
            }
        }
        fetchData();
    }, [slug]);

    if (product === null && notfound) {
        return (
            <div className="min-h-[50vh] flex justify-center m-10">
                <span className="text-xl md:text-3xl font-medium inline">
                    Product not found. 🥺
                </span>
            </div>
        );
    }

    if (product === null) {
        return <CardDetailSkeleton />;
    }

    const handleChangeQuantity = (num: number) => {
        setQuantity((prev) => {
            if (prev + num < 1) {
                return 1;
            }
            return prev + num;
        });
    };

    const handleAddToCart = (id: string) => {

        dispatch(setCart({ id: id, quantity: quantity }));

        dispatch(
            setToast({
                status: true,
                type: 'success',
                message: '🎉 Added to your cart',
            })
        );
        setTimeout(() => {
            dispatch(setToast({ status: false }));
        }, 2000);
        return;
    };

    const randomText = () => {
        let num = Math.round(Math.random()*3 + 1);
        let lorem = [
            'Ipsum dolor sit amet consectetur adipisicing elit. Quidem a quis quibusdam, rem doloremque odit optio molestias, provident nam inventore voluptate amet quisquam vitae magni deserunt ullam nisi numquam aut',
            'Sit amet consectetur adipisicing elit. Incidunt est esse molestiae voluptatum consequatur ipsa consequuntur dolore quisquam eveniet, distinctio ipsum reiciendis eum, quos nam voluptates blanditiis fugiat doloribus earum.',
            'Consectetur adipisicing elit. Rem soluta molestias est assumenda enim accusantium suscipit aspernatur velit at impedit, libero molestiae minus, quidem aperiam sint consequatur quibusdam! Minima, voluptate',
            'Amet sit, consectetur adipisicing elit. Ullam animi voluptas eum est voluptatibus commodi recusandae alias amet ipsum nulla ipsa, pariatur, necessitatibus dolores veritatis molestiae consequatur sunt sint harum.',
            'Fugiat it consequuntur esse ab dolorem unde beatae placeat nulla molestias dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti odit repellat. Veritatis molestias molestiae similique non Ipsum'
        ]
        return lorem[num];
    }


    const handleAddToWishlist = (id: string) => {
        if (!wishlist.includes(id)) {
            dispatch(setWishlist(id));
            dispatch(
                setToast({
                    status: true,
                    type: 'success',
                    message: '🎉 Added to your wishlist',
                })
            );
            setTimeout(() => {
                dispatch(setToast({ status: false }));
            }, 2000);
            return;
        }
        dispatch(
            setToast({
                status: true,
                type: 'error',
                message: '❌ This product is already in your wishlist.',
            })
        );
        setTimeout(() => {
            dispatch(setToast({ status: false }));
        }, 2000);
    };

    return (
        <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
            <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 md:w-1/2 ">
                        <div className="overflow-hidden ">
                            <div className="mb-6 lg:mb-10 lg:h-2/4 ">
                                <Image
                                    src={product.image}
                                    alt=""
                                    className="object-cover w-full lg:h-auto"
                                    height={0}
                                    width={0}
                                    sizes="100vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-8 md:px-4 md:w-1/2">
                        <div className="lg:pl-20">
                            <div className="mb-8">
                                <span className="text-lg font-medium text-rose-500 dark:text-rose-200">
                                    New
                                </span>
                                <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                                    {product.name}
                                </h2>
                                <div className="flex items-center mb-6">
                                    <ul className="flex mr-2">
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                    <p className="text-xs dark:text-gray-400 ">
                                        (2 customer reviews)
                                    </p>
                                </div>
                                <p className="max-w-md mb-8 text-justify">
                                    {randomText()}
                                </p>
                                <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                    <span className="text-red-600">
                                        ${product.price}
                                    </span>{' '}
                                    <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                                        ${Math.round(product.price * 1.5)}
                                    </span>
                                </p>
                                <p className="text-green-600 dark:text-green-300 ">
                                    4 in stock
                                </p>
                            </div>

                            <div className="w-32 mb-8 ">
                                <label
                                    htmlFor=""
                                    className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400"
                                >
                                    Quantity
                                </label>
                                <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                    <button
                                        onClick={() => handleChangeQuantity(-1)}
                                        className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400"
                                    >
                                        <span className="m-auto text-2xl font-thin">
                                            -
                                        </span>
                                    </button>
                                    <input
                                        className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black cursor-default"
                                        value={quantity}
                                        readOnly
                                    />
                                    <button
                                        onClick={() => handleChangeQuantity(1)}
                                        className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400"
                                    >
                                        <span className="m-auto text-2xl font-thin">
                                            +
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center -mx-4 ">
                                <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                    <button
                                        onClick={() =>
                                            handleAddToCart(product._id)
                                        }
                                        className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                                    <button 
                                    onClick={() => handleAddToWishlist(product._id)}
                                    className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                        Add to Favorite
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* TOAST SECTION */}
            {isToast.status && <MyToast />}
        </section>
    );
}

export default CardDetail;
