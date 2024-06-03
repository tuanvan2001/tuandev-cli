import express from "express";

const router = express.Router();
import list from "../controller/user/list.js"
import add from "../controller/user/add.js"
import {tryCatch} from "../utils/tryCatchController.js"
import {addUser} from "../middleware/request/user/add.js";

router.get("/", tryCatch(list))
router.post("/", addUser, tryCatch(add))

export default router