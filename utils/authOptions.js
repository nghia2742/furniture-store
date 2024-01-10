import { login } from '@/app/actions';
import CredentialProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialProvider({
            name: 'credentials',
            credentials: {},
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (error) {
                    throw Error(error);
                }
            },
        }),
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user);
            return token;
        },
        session: async ({ session, token }) => {
            session.user = token.user;
            return session;
        },
    },
};
