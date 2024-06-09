import cors from "cors"

const {WHITE_LIST} = process.env
export default function () {
    const origin = !WHITE_LIST  ? "*" : String(WHITE_LIST).split(",")
    return cors({
        "origin": origin,
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204,
        "credentials": true
    })
}