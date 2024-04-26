import {dbQuery} from "../../../db/start/db";

export async function POST({ request }) {
    const body = await request.json()
    const id = body.id
    const token = await request.headers.get('authorization')
    const parsedToken = token.slice(7);

    console.log(body)
    console.log(parsedToken)

    if (parsedToken === import.meta.env.PUBLIC_API_KEY) {
        const res = await dbQuery(`DELETE FROM Settings WHERE id='${id}'`)
        return Response.json({message: "Success"})
    } else {
        return new Response(JSON.stringify({message: "Unauthorized"}), {
            status: 401,
        })
    }
}
