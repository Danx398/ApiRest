import { Router } from "express";
import { getDatos,createDatos, updateDatos, deleteDatos, getDato } from "../controllers/datos.controllers.js";
const router = Router();
router.get('/', getDatos)
router.get('/:id',getDato)
router.post('/', createDatos)
router.patch('/:id', updateDatos)
router.delete('/:id', deleteDatos)
export default router;
