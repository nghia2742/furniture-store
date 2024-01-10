import Image from 'next/image';
import React, { FC } from 'react';
import Link from 'next/link';
import { CartIcon } from '@/assets/svgs';
import FavButton from './FavButton';
import { CardProps } from '@/app/types';
import CartButton from './CartButton';

const Card: React.FC<CardProps> = ({ product }) => {
    const { _id, name, image, price } = product;
    return (
        <section className="card w-80 bg-stripes-sea shadow-xl mt-10 hover:scale-105 transition-all duration-300 hover:cursor-pointer ring-purple-400 hover:ring-4">
            <Link href={`/shop/product/${name}`}>
                <figure className="pt-5 h-60">
                    <Image
                        className="w-56 h-auto"
                        draggable={false}
                        src={image}
                        alt={name}
                        sizes="100vw"
                        width={0}
                        height={0}
                        priority
                    />
                </figure>
            </Link>
            <div className="card-body h-64 bg-blue-200 rounded-b-2xl">
                <Link
                    href={`/shop/product/${name}`}
                    className="card-title text-xl"
                >
                    {name}
                </Link>
                <div className="rating rating-sm">
                    <input className="mask mask-star-2 bg-orange-400" />
                    <input className="mask mask-star-2 bg-orange-400" />
                    <input className="mask mask-star-2 bg-orange-400" />
                    <input className="mask mask-star-2 bg-orange-400" />
                    <input className="mask mask-star-2 bg-orange-400" />
                </div>
                <p className="line-clamp-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, aperiam molestiae asperiores ex ipsa assumenda voluptatibus pariatur repellendus quo rerum cum officiis necessitatibus molestias architecto ut perferendis tempore quisquam in.
                    Dolore nisi officiis sint molestiae, velit animi enim dicta exercitationem optio cum ex cupiditate veniam non fugiat pariatur. Veritatis eius magni dolorum tenetur iure vel voluptatibus cumque eaque praesentium recusandae?
                    
                </p>
                <div className="card-actions justify-between">
                    <p className="inline-block text-2xl font-bold text-gray-700 dark:text-gray-400 ">
                        <span className="text-red-600">${price}</span>{' '}
                        <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                            ${Math.round(price * 1.5)}
                        </span>
                    </p>
                    <div className="flex">
                        {/* Favorite */}
                        <FavButton id={_id} />
                        {/* Button cart */}
                        <CartButton id={_id} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Card;
