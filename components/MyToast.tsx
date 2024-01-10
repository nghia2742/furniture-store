'use client';
import { AppState } from '@/lib/store';
import React from 'react';
import { useSelector } from 'react-redux';

const MyToast = () => {
    const isToast = useSelector((state: AppState) => state.app.toast);
    const type = isToast.type;
    const getColorClass = (type: string) => {
        switch (type) {
            case 'success':
                return 'border-green-400';
            case 'error':
                return 'border-red-400';
            case 'warning':
                return 'border-yellow-400';
            default:
                return 'border-blue-400';
        }
    };

    

    return (
        <div className="toast toast-top toast-center z-50 top-20">
            <div
                className={`max-w-md bg-white border-2 ${getColorClass(type)} rounded-xl shadow-lg`}
                role="alert"
            >
                <div className="flex p-4">
                    <div className="">
                        <p className="text-sm text-gray-700 dark:text-gray-400">
                            {isToast.message}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyToast;
