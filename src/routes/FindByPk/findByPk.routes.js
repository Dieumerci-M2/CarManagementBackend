import { Router } from "express";
import findOneByPk from "../../controllers/findOneByPk.js";

const findByPk = Router()

findByPk.get( '/findByPk/:id', findOneByPk )

export default findByPk