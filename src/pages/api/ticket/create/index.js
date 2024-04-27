import {dbQuery} from "../../../admin/db/start/db.js";

export async function POST({ request }) {
    const body = await request.json()
    const eventid = body.EVENT_ID
    const userid = body.USER_ID
    const valid = body.VALID_DATE
    const token = await request.headers.get('authorization')
    const parsedToken = token.slice(7);

    if (parsedToken === 'estoeslaclavesecretadelticketsystemaltawebs') {
        const event_response = await dbQuery(`SELECT * FROM Events WHERE id='${eventid}'`)
        const event = event_response[0]
        const date_v = valid
        console.log(date_v)
        const exist = await dbQuery(`INSERT INTO Tickets(name, userid, event_id, valid) VALUES('Ticket para ${event.name}', '${userid}', '${eventid}', '${date_v}');`)
        return Response.json({message: "Success", status: true})
    } else {
        return new Response(JSON.stringify({message: "Unauthorized"}), {
            status: 401,
        })
    }
}