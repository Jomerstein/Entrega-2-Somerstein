import express from 'express'
import controller from '../controllers/pokemon.controller.js'

const router = express.Router()



router.get("/:nombre", controller.getPokemonPorNombre)


export default router

