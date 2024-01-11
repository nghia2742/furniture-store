import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import Avatar from '@/assets/images/defaultedAvatar.jpg';
import { BASE_URL } from '@/constant';
import { useEffect } from 'react';
import { saveGoogleAccount } from '@/app/actions';

const UserAction = () => {
    const { data: session, status } = useSession();
    const isAuthenticated = status === 'authenticated';
    const avt = session?.user?.image || Avatar;

    useEffect(() => {
        async function fetchData() {
            const email =session?.user?.email || '';
            const name =session?.user?.name || '';
            await saveGoogleAccount(email, name);
        }
        if (isAuthenticated) {
            fetchData();
        }
    }, [isAuthenticated, session]);

    if (isAuthenticated) {
        return (
            <>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="mx-2 avatar">
                        <div className="w-10">
                            <Image
                                className="rounded-full"
                                width={100}
                                height={100}
                                alt="Avatar"
                                src={avt}
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content border border-sky-200 mt-3 z-[1] p-2 shadow bg-base-100 rounded-lg w-52"
                    >
                        <li>
                            <Link href={'/profile'} className="justify-between">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() =>
                                    signOut({
                                        callbackUrl: BASE_URL,
                                    })
                                }
                            >
                                Sign out
                            </button>
                        </li>
                    </ul>
                </div>
            </>
        );
    }

    return (
        <div className="flex lg:gap-2">
            <Link href={'/login'} className="btn btn-sm btn-ghost rounded-full">
                Log in
            </Link>
            <Link
                href={'/signup'}
                className="btn btn-sm btn-ghost text-white rounded-full bg-gradient-to-br from-purple-500 to-pink-500"
            >
                Sign up
            </Link>
        </div>
    );
};

export default UserAction;
