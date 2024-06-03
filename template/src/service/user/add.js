import {MySQL} from "../../db/mysql.js";
import User from "../../entity/user.js";
import {isError} from "../../type/ServiceError.js";
import {USER_FOUND} from "../../message/user.js";

export default async (user) => {
    try {
        const userDb = await MySQL.createQueryBuilder(User, "User")
            .where("User.username = :username", {username: user.username})
            .orWhere("User.email = :email", {email: user.email})
            .getOne()
        if (userDb) throw new Error(USER_FOUND)
        return MySQL.createQueryBuilder(User, "User")
            .insert()
            .values(user)
            .execute()
    } catch (e) {
        return isError({
            errorMessage: e.message
        })
    }
}