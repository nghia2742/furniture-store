'use client';
import { BackIcon } from '@/assets/svgs';
import Link from 'next/link';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '@/app/actions';
import MyToast from '@/components/MyToast';
import { AppState } from '@/lib/store';
import { setToast } from '@/lib/features/appSlice';
import { signIn } from 'next-auth/react';

function SignUp() {
    const { push } = useRouter();
    const dispatch = useDispatch();
    const [isLoadingSubmit, setLoadingSubmit] = useState(false);
    const isToast = useSelector((state: AppState) => state.app.toast);
    const [confirmPass, setConfirmPass] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleInputConfirmPassChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setConfirmPass(event.target.value);
    };

    // Function to handle form input changes
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoadingSubmit(true);
        if (formData.password.length < 6) {
            setLoadingSubmit(false);
            dispatch(
                setToast({
                    status: true,
                    type: 'error',
                    message: '❌ Your pass must minium 6 characters',
                })
            );
            setTimeout(() => {
                dispatch(setToast({ status: false }));
            }, 2000);
            return;
        }
        if (formData.password !== confirmPass) {
            setLoadingSubmit(false);
            dispatch(
                setToast({
                    status: true,
                    type: 'error',
                    message: "❌ Your confirm password doesn't match",
                })
            );
            setTimeout(() => {
                dispatch(setToast({ status: false }));
            }, 2000);
            return;
        }

        try {
            const response = await register(formData);
            if (response.status === 201) {
                dispatch(
                    setToast({
                        status: true,
                        type: 'success',
                        message: `🎉 ${response.message}`,
                    })
                );
                setTimeout(async () => {
                    dispatch(setToast({ status: false }));
                    await signIn('credentials', {
                        email: formData.email,
                        password: formData.password,
                        redirect: false,
                    });
                    push('/');
                }, 1000);
            } else {
                setLoadingSubmit(false);
                dispatch(
                    setToast({
                        status: true,
                        type: 'error',
                        message: `❌ ${response.message}`,
                    })
                );
                setTimeout(() => {
                    dispatch(setToast({ status: false }));
                }, 2000);
            }
        } catch (error) {
            console.log(error);
            setLoadingSubmit(false);
        }
    };

    return (
        <section className="h-fit min-h-screen p-10 bg-gradient-to-r from-blue-300 to-pink-300">
            <div className="flex flex-col items-center justify-center mx-auto">
                <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 glass">
                    <Link
                        href={'/'}
                        className="btn btn-link no-underline hover:no-underline"
                    >
                        <BackIcon />
                        <span className="text-black text-sm ">Exit</span>
                    </Link>
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-black text-center">
                            Sign up an account
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-black"
                                >
                                    Your name
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    className="border sm:text-sm focus:outline-none rounded-lg focus:ring-2 block w-full p-2.5 bg-slate-100 border-slate-300 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Elon Musk"
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-black"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="border sm:text-sm focus:outline-none rounded-lg focus:ring-2 block w-full p-2.5 bg-slate-100 border-slate-300 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-black"
                                >
                                    Your password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="border sm:text-sm focus:outline-none rounded-lg focus:ring-2 block w-full p-2.5 bg-slate-100 border-slate-300 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                                    required
                                    onChange={handleInputChange}
                                />
                                {formData.password.length < 6 &&
                                    formData.password.length !== 0 && (
                                        <span className="text-sm p-2 text-red-500">
                                            Minium 6 characters
                                        </span>
                                    )}
                            </div>
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="block mb-2 text-sm font-medium text-black"
                                >
                                    Confirm password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="••••••••"
                                    className="border sm:text-sm focus:outline-none rounded-lg focus:ring-2 block w-full p-2.5 bg-slate-100 border-slate-300 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                                    required
                                    onChange={handleInputConfirmPassChange}
                                />
                                {confirmPass !== formData.password &&
                                    confirmPass.length !== 0 && (
                                        <span className="text-sm p-2 text-red-500">
                                            Don&apos;t match your password
                                        </span>
                                    )}
                            </div>

                            <button
                                disabled={isLoadingSubmit}
                                type="submit"
                                className="w-full btn border-blue-500 text-white bg-blue-500 hover:bg-blue-700"
                            >
                                {isLoadingSubmit ? (
                                    <span className="loading loading-spinner"></span>
                                ) : (
                                    ''
                                )}
                                Sign up
                            </button>

                            <p className="text-sm font-light text-black">
                                You have already had an account?{' '}
                                <Link
                                    href="/login"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Log in
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            {/* TOAST SECTION */}
            {isToast.status && <MyToast />}
        </section>
    );
}

export default SignUp;
