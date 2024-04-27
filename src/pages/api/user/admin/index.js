import {dbQuery} from "../../../admin/db/start/db.js";

export async function POST({ request }) {
    const body = await request.json()
    const userid = body.USER_ID
    const value = body.VALUE
    const token = await request.headers.get('authorization')
    const parsedToken = token.slice(7);

    if (parsedToken === 'estoeslaclavesecretadelticketsystemaltawebs') {
        const exist = await dbQuery(`UPDATE User SET admin='${value}' WHERE id='${userid}';`)
        return Response.json({message: "Success", status: true})
    } else {
        return new Response(JSON.stringify({message: "Unauthorized"}), {
            status: 401,
        })
    }
}