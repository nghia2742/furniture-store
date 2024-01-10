import { cookies } from 'next/headers';
import {NextApiRequest} from 'next'

export async function POST(request: NextApiRequest) {
    try {
        cookies().delete('access_token')

        const res = {
            message: 'Logged out!',
        };

        return new Response(JSON.stringify(res), {
            status: 200
        });
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ message: "Logout failed" }), {
            status: 404,
        });
    }
}
