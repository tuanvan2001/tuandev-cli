import add from "../../service/user/add.js";
import {BadRequest} from "../../utils/HttpError.js";
import {USER_CREATED} from "../../message/user.js";

export default async (req, res, next) => {
    // try {
        const userBody = req.body
        console.log(userBody)
        const user = await add(userBody)
        if (user.errorMessage) throw new BadRequest(user.errorMessage)
        return res.sendCreated({
            data: user,
            message: USER_CREATED
        })
    // } catch (e) {
    //     next(e)
    // }
}