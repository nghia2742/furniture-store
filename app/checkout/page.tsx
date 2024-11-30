'use client';
import React, { useEffect, useState, useRef, FormEvent } from 'react';
import Image from 'next/image';
import PaymentRadio from '@/components/PaymentRadio';
import { useSession } from 'next-auth/react';
import { ProductProp } from '../types';
import { getProductByIds } from '../actions';
import { useSelector } from 'react-redux';
import { AppState } from '@/lib/store';
import { SuccessIcon } from '@/assets/svgs';
import { setItemToLocalStorage } from '@/utils/localStorage';

const Checkout = () => {
    const { data: session } = useSession();
    const [products, setProducts] = useState<ProductProp[] | []>([]);
    const cart = useSelector((state: AppState) => state.product.cart);
    const [pending, setPending] = useState(false);
    const modalRef = useRef<HTMLDialogElement>(null);
    const [showModal, setShowModal] = useState(false);

    const handleModalShow = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
            setShowModal(true);
        }
    };

    // useEffect(() => {
    //     async function fetchData() {
    //         const prodIds = cart.map((product) => product.id);
    //         const response = await getProductByIds(prodIds);
    //         setProducts(response);
    //     }
    //     fetchData();
    // }, [cart]);

    const getQuantityById = (id: string) => {
        let product = cart.find((e) => e.id === id);
        if (product === undefined) return 0;
        if (product.quantity < 1) return 1;
        return product.quantity;
    };

    const handleTotalPrice: any = () => {
        const subtotals = cart.map((prod: { id: string; quantity: number }) => {
            const product = products.find((e) => prod.id === e.id);
            const quantity = getQuantityById(prod.id);
            const price = product?.price || 0; // Use 0 as default price if not found
            const subtotal = quantity * price;
            return subtotal;
        });

        const totalPrice = subtotals.reduce(
            (acc, currentValue) => acc + currentValue,
            0
        );
        return totalPrice.toFixed(2);
    };

    const total = Number((handleTotalPrice() * 0.95 - 50).toFixed(2));

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setPending(true);
        setTimeout(() => {
            handleModalShow();
            setPending(false);
   
                

        }, 3000);
    };

    const handleCloseModal = () => {
        setItemToLocalStorage("cart", [])
        window.location.href = '/shop'
    }
    return (
        <section className="p-2 md:p-8 h-fit min-h-screen">
            <h1 className="text-xl md:text-4xl py-4 text-center mb-10 divider divider-warning">
                Checkout
            </h1>

            <div className="border-4 border-dashed p-6 my-12">
                <h2 className="text-xl font-semibold my-2">Your information</h2>
                <div>
                    <div>Name: {session?.user?.name}</div>
                    <div>Address: 123 Street, Autumn Town, LA</div>
                    <div>Phone number: +1 909 238 4221</div>
                </div>
            </div>

            <h1 className="text-xl md:text-4xl py-4 text-center mb-10 divider divider-warning">
                Review your order
            </h1>
            <div className="overflow-x-auto md:px-10 ">
                {products.length === 0 ? (
                    <div className="min-h-[60vh] flex items-center justify-center">
                        <div className="text-xl text-center">
                            Your cart is empty.
                        </div>
                    </div>
                ) : (
                    <table className="table table-lg mx-auto">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => {
                                return (
                                    <tr key={index} className="h-20">
                                        <th>{index + 1}</th>
                                        <td>
                                            <Image
                                                className="w-16 h-auto"
                                                src={product.image}
                                                height={0}
                                                width={0}
                                                sizes="100vw"
                                                alt={product.name}
                                            />
                                        </td>
                                        <td>{product.name}</td>
                                        <td>
                                            <input
                                                className="max-w-12 text-center bg-transparent"
                                                disabled
                                                id={product.id}
                                                type="number"
                                                name="quantity"
                                                defaultValue={getQuantityById(
                                                    product.id
                                                )}
                                                min={1}
                                                readOnly
                                            />
                                        </td>
                                        <td>{product.price}</td>
                                        <td>
                                            {(
                                                getQuantityById(product.id) *
                                                product.price
                                            ).toFixed(2)}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
            <div className="flex items-center justify-end p-10 gap-4">
                <h2 className="text-2xl">Total price: </h2>
                <span className="text-3xl font-bold text-red-500">
                    ${handleTotalPrice()}
                </span>
            </div>
            {total > 0 && (
                <>
                    <h1 className="text-xl md:text-4xl py-4 text-center mb-10 divider divider-warning">
                        Choose your payment method
                    </h1>
                    <form className="md:flex" onSubmit={handleSubmit}>
                        <div className="form-control md:w-1/2 p-4 md:items-center">
                            <PaymentRadio />
                        </div>
                        <div className="md:w-1/2 p-4">
                            <div className="border-4 rounded-lg border-dashed p-5">
                                <h2 className="text-2xl font-semibold px-8">
                                    Invoice
                                </h2>
                                <div className="divider divider-default"></div>
                                <div className="flex flex-col my-8 font-mono px-8">
                                    <div className="flex justify-between">
                                        <div>SUBTOTAL:</div>
                                        <div>${handleTotalPrice()}</div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>TAX RATE:</div>
                                        <div>5%</div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>DISCOUNT:</div>
                                        <div>-$50</div>
                                    </div>
                                    <div className="divider divider-default"></div>
                                    <div className="flex justify-between font-bold text-xl">
                                        <div>TOTAL:</div>
                                        <div className="text-red-500">
                                            ${total}
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full btn btn-success text-white">
                                    {pending && (
                                        <span className="loading loading-spinner"></span>
                                    )}
                                    Accept
                                </button>
                            </div>
                        </div>
                    </form>
                </>
            )}

            <dialog ref={modalRef} id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-slate-700">
                        🎊 Congratulations!
                    </h3>
                    <p className="py-8 flex justify-center">
                        <SuccessIcon />
                    </p>
                    <p className="text-center px-10 pb-10">
                        Your order is processing and delivering to you soon as
                        soon possible
                    </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button onClick={handleCloseModal}>close</button>
                </form>
            </dialog>
        </section>
    );
};

export default Checkout;
