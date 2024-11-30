'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { BackIcon, GoogleIcon, HideIcon, ShowIcon } from '@/assets/svgs';
import Link from 'next/link';
import React, { useState, FormEvent } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import { setToast } from '@/lib/features/appSlice';
import { AppState } from '@/lib/store';
import MyToast from '@/components/MyToast';
import { BASE_URL, WARNING_MSG } from '@/constant';

const Login: React.FC = () => {
    const router = useRouter();
    const params = useSearchParams();
    const callbackUrl = params.get('callbackUrl')?params.get('callbackUrl'):BASE_URL;
    const [isLoadingSubmit, setLoadingSubmit] = useState(false);
    const [isShowPassword, setShowPassword] = useState(false);
    const isToast = useSelector((state: AppState) => state.app.toast);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // Function to handle form input changes
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        return alert(WARNING_MSG)
        // setLoadingSubmit(true);
        // if (formData.password.length < 6) {
        //     setLoadingSubmit(false);
        //     dispatch(
        //         setToast({
        //             status: true,
        //             type: 'error',
        //             message: '❌ Your pass must minium 6 characters',
        //         })
        //     );
        //     setTimeout(() => {
        //         dispatch(setToast({ status: false }));
        //     }, 2000);
        //     return;
        // }

        // try {
        //     const response = await signIn('credentials', {
        //         email: formData.email,
        //         password: formData.password,
        //         redirect: false,
        //         callbackUrl: `${callbackUrl}`,
        //     });

        //     if (response?.error) {
        //         setLoadingSubmit(false);
        //         dispatch(
        //             setToast({
        //                 status: true,
        //                 type: 'error',
        //                 message: `❌ ${response.error.replace("Error: ","")}`,
        //             })
        //         );
        //         setTimeout(() => {
        //             dispatch(setToast({ status: false }));
        //         }, 2000);
        //         return;
        //     }

        //     router.push(String(callbackUrl));
        // } catch (error) {
        //     console.log(error);
        //     setLoadingSubmit(false);
        // }
    };

    const handleLoginGoogle = async () => {
        try {
            const res = await signIn('google', {
                callbackUrl: `${callbackUrl}`,
            });

            if (res?.error) {
                console.log(res?.error);
                setLoadingSubmit(false);
                return;
            }
        } catch (error) {
            setLoadingSubmit(false);
        }
    };

    return (
        <section className=" h-fit min-h-screen bg-gradient-to-r from-blue-300 to-pink-300">
            <div className="flex p-5 flex-col items-center justify-center mx-auto h-screen lg:py-0">
                <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 glass">
                    <Link
                        href={'/'}
                        className="btn btn-link no-underline hover:no-underline"
                    >
                        <BackIcon />
                        <span className="text-black text-sm ">Exit</span>
                    </Link>
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-black text-center">
                            Sign in to your account
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6"
                            id="form-login"
                            onSubmit={handleSubmit}
                        >
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
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-black"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={
                                            isShowPassword ? 'text' : 'password'
                                        }
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="border sm:text-sm focus:outline-none rounded-lg focus:ring-2 block w-full p-2.5 bg-slate-100 border-slate-300 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <span
                                        className="absolute end-2.5 bottom-3"
                                        onClick={() =>
                                            setShowPassword(!isShowPassword)
                                        }
                                    >
                                        {isShowPassword ? (
                                            <HideIcon />
                                        ) : (
                                            <ShowIcon />
                                        )}
                                    </span>
                                </div>
                                {formData.password.length < 6 &&
                                    formData.password.length !== 0 && (
                                        <span className="text-sm p-2 text-red-500">
                                            Minium 6 characters
                                        </span>
                                    )}
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="remember"
                                            className="text-black"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="text-sm font-medium hover:underline text-gray-500"
                                >
                                    Forgot password?
                                </a>
                            </div>

                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="grid rounded-box place-items-center">
                                    <button
                                        disabled={isLoadingSubmit}
                                        type="submit"
                                        className="w-full btn border-blue-400 text-white bg-blue-400 hover:bg-blue-500"
                                    >
                                        {isLoadingSubmit ? (
                                            <span className="loading loading-spinner"></span>
                                        ) : (
                                            ''
                                        )}
                                        Login
                                    </button>
                                </div>
                                <div className="divider divider-neutral text-black">
                                    OR
                                </div>
                                <div className="grid rounded-box place-items-center">
                                    <div
                                        onClick={handleLoginGoogle}
                                        className="w-full btn btn-ghost border border-gray-500 hover:opacity-90"
                                    >
                                        <GoogleIcon />
                                        <span className="text-black ">
                                            Login with Google
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm font-light text-black">
                                Don&apos;t have an account yet?{' '}
                                <Link
                                    href="/signup"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Sign up
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
};

export default Login;
