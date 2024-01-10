'use client';
import { DeliveryIcon, MasterCardIcon, VisaIcon } from '@/assets/svgs';
import React, { useState } from 'react';

function PaymentRadio() {
    const [isChecked, setIsChecked] = useState(false);
    const [creditCard, setCreditCard] = useState({
        number: 0,
        date: '',
        CVV: 0,
    });

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.value === 'COD');
    };

    const handleAutofill = () => {
        setCreditCard({
            number: 4456530000001005,
            date: '12/24',
            CVV: 123,
        });
    };

    return (
        <>
            <label
                htmlFor="paymentMethod1"
                className={` ${
                    isChecked ? 'border-2 border-blue-500' : 'opacity-50'
                } flex items-center gap-2 border-2 md:w-2/3 h-fit p-5 rounded-lg cursor-pointer hover:ring-2`}
            >
                <input
                    id="paymentMethod1"
                    type="radio"
                    name="radio-payment"
                    className="radio checked:bg-blue-500"
                    checked={isChecked}
                    onChange={handleRadioChange}
                    value={'COD'}
                />
                <span>
                    <DeliveryIcon />
                </span>
                <span className="select-none">Cash On Delivery</span>
            </label>
            <label
                htmlFor="paymentMethod2"
                className={` ${
                    !isChecked ? 'border-2 border-blue-500' : 'opacity-50'
                } mt-5 border-2 md:w-2/3 h-fit p-5 rounded-lg cursor-pointer hover:ring-2`}
            >
                <div className="flex gap-2 items-center">
                    <input
                        id="paymentMethod2"
                        type="radio"
                        name="radio-payment"
                        className="radio checked:bg-blue-500"
                        checked={!isChecked}
                        onChange={handleRadioChange}
                        value={'CRE'}
                    />

                    <span>
                        <VisaIcon />
                    </span>
                    <span>
                        <MasterCardIcon />
                    </span>
                </div>
                <div className="p-5 mt-5">
                    <div className="max-w-sm mx-auto">
                        <label htmlFor="card-number-input" className="sr-only">
                            Card number:
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="card-number-input"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-sans"
                                disabled={isChecked}
                                placeholder="4242 4242 4242 4242"
                                pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                                defaultValue={creditCard.number===0?'':creditCard.number}
                                required
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4 my-4">
                            <div className="relative max-w-sm col-span-2">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <label
                                    htmlFor="card-expiration-input"
                                    className="sr-only"
                                >
                                    Card expiration date:
                                </label>
                                <input
                                    id="card-expiration-input"
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="12/23"
                                    disabled={isChecked}
                                    pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
                                    title="Please enter a valid date in MM/YY format"
                                    defaultValue={creditCard.date}
                                    required
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="cvv-input" className="sr-only">
                                    Card CVV code:
                                </label>
                                <input
                                    type="text"
                                    id="cvv-input"
                                    pattern="[0-9]*"
                                    aria-describedby="helper-text-explanation"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="CVV"
                                    title="Please enter a valid CVV in 123 format"
                                    disabled={isChecked}
                                    defaultValue={creditCard.CVV===0?'':creditCard.CVV}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </label>
            <div className={`${isChecked ? 'hidden' : 'block'} my-2`}>
                <span className="text-xs italic">
                    *Note: You can click here to{' '}
                    <span
                        className="link link-primary"
                        onClick={handleAutofill}
                    >
                        Autofill
                    </span>
                </span>
            </div>
        </>
    );
}

export default PaymentRadio;
