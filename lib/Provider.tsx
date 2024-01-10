'use client';
import { Provider } from 'react-redux';
import { store } from './store';
import React, {ReactNode} from 'react';

type Layout = {
    children: ReactNode;
};

export const ProviderLayout: React.FC<Layout> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}