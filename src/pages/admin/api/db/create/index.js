import {dbQuery} from "../../../db/start/db";

export async function POST({ request }) {
    const body = await request.json()
    const id = body.id
    const createType = body.CREATETYPE
    const name = body.NAME
    const value = body.VALUE
    const token = await request.headers.get('authorization')
    const parsedToken = token.slice(7);

    console.log(body)
    console.log(parsedToken)

    if (parsedToken === import.meta.env.PUBLIC_API_KEY) {
        const exist = await dbQuery(`SELECT * FROM Settings where name='${name}';`)
        if (!exist[0]) {
            const res = await dbQuery(`INSERT INTO Settings(name, ${createType}) VALUES('${name}', '${value}');`)
            return Response.json({message: "Success", status: true})
        } else {
            return Response.json({message: "Element with this name already exist.", status: false})
        }
    } else {
        return new Response(JSON.stringify({message: "Unauthorized"}), {
            status: 401,
        })
    }
}