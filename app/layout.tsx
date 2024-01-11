import type { Metadata } from 'next';
import { Source_Serif_4 } from 'next/font/google';
import './globals.css';
import { ProviderLayout } from '@/lib/Provider';
import { getServerSession } from 'next-auth';
import SessionProvider from '@/components/SessionProvider';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const ss4 = Source_Serif_4({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Furniano',
    description: 'Generated by Ngo Trong Nghia',
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession();
    return (
        <html lang="en">
            <body className={ss4.className} data-theme="light">
                <SessionProvider session={session}>
                    <ProviderLayout>
                        {children}
                        <Analytics />
                        <SpeedInsights />
                    </ProviderLayout>
                </SessionProvider>
            </body>
        </html>
    );
}
