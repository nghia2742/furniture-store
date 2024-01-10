import { cookies } from 'next/headers';
import {NextApiRequest} from 'next'

export async function POST(request: NextApiRequest) {
    try {
        const res = cookies().has('access_token');
        
        if (res === undefined) {
            return new Response(JSON.stringify(false), {
                status: 404
            });
        }

        return new Response(JSON.stringify(res), {
            status: 200
        });

    } catch (error) {
        return new Response(JSON.stringify({ message: "Logout failed" }), {
            status: 404,
        });
    }
}
