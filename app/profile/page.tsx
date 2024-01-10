'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import Avatar from '@/assets/images/defaultedAvatar.jpg';

const Profile = () => {
    const { data: session } = useSession();
        function convertToS256(url: string) {
            if (url==="") return false;
        return url.replace(/=s96(-c)?$/, '=s256$1');
    }
    const avt = session?.user?.image?session.user.image:"";
    const convertedURL = convertToS256(avt);
    return (
        <section className="p-2 md:p-8 h-fit min-h-screen">
            <h1 className="text-xl md:text-4xl py-4 text-center mb-5 divider divider-warning">
                Profile
            </h1>

            <div className="md:flex">
                <div className="md:w-1/2 flex justify-center items-center">
                    <div>
                        <div className="avatar">
                            <div className="w-52 rounded-full">
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={convertedURL?convertedURL:Avatar}
                                    alt="avt"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="md:w-1/2 p-5">
                    <li className="text-xl my-5">
                        Name: {session?.user?.name}
                    </li>
                    <li className="text-xl my-5">
                        Phone Number: +1 123 4567 890
                    </li>
                    <li className="text-xl my-5">
                        Address: 123 Street, Autumn town, LA
                    </li>
                    <li className="text-xl my-5">Email: {session?.user?.email}</li>
                </ul>
            </div>
        </section>
    );
};

export default Profile;
