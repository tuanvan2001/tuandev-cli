import getMany from "../../service/user/getMany.js";
export default async (req,res,next) => {
    const user = await getMany()
    return res.sendSuccess({
        data:user,
    })
}