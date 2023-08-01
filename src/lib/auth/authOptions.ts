import 'server-only'
import type { NextAuthOptions } from "next-auth";
import OktaProvider from "next-auth/providers/okta";
import Auth0Provider from "next-auth/providers/auth0";
import KeycloakProvider from "next-auth/providers/keycloak";
import navigation from "@/navigation";

const authOptions: NextAuthOptions = {
    pages: {
        signIn: navigation.login,
        // signOut:
        // error:
        // verifyRequest:
        // newUser:
    },
    providers: [
        OktaProvider({
            clientId: process.env.OKTA_ID as string,
            clientSecret: process.env.OKTA_SECRET as string,
            issuer: process.env.OKTA_ISSUER as string

        }),
        Auth0Provider({
            clientId: process.env.AUTH0_ID as string,
            clientSecret: process.env.AUTH0_SECRET as string,
            issuer: process.env.AUTH0_ISSUER as string

        }),
        KeycloakProvider({
            clientId: process.env.KEYCLOAK_ID as string,
            clientSecret: process.env.KEYCLOAK_SECRET as string,
            issuer: process.env.KEYCLOAK_ISSUER as string
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24 * 30, // 30 days
    },
    // jwt:{
    //     maxAge: 60 * 60 * 24 * 30,
    // },
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.provider = account.provider;
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.sub as string;
                session.user.provider = token.provider as string;
            }
            return session
        },
    },
    events: {
        signIn: (message) => {
            console.info(`Sign in was successful for user ${message.user.name} with id ${message.user.id} via provider ${message.account?.provider}`);
        },
        signOut: (message) => {
            console.info(`Sign out was successful for user ${message.token.name} with id ${message.token.sub}`);
        }
    }
    // cookies: {
    //     sessionToken: {
    //         name: `schi.session-token`,
    //         options: {
    //             httpOnly: true,
    //             sameSite: 'lax',
    //             path: '/',
    //             secure: false
    //         }
    //     },
    // },
}

export default authOptions;
