import {MySQL} from "../../db/mysql.js";
import User from "../../entity/user.js";
import {isError} from "../../type/ServiceError.js";
export default async () => {
    try {
        return await MySQL.createQueryBuilder(User, "User")
            .getMany()
    } catch (e) {
        return isError({
            errorMessage: e.message
        })
    }
}