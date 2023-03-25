import { conexion } from "../conector_db.js"



export const getDatos = async (req, res) => {
    try {
        const [rows] = await conexion.query("SELECT * FROM t_anime");
        // const {nombre, edad, carrera} = req.body
        if (rows.length <= 0) {
            res.status(500).json({ mensaje: "Datos no localizados" });
        } else {
            res.status(202).json(rows)
        }
    } catch (error) {
        res.status(500).json({ mensaje: "Error de servidor" })
    }
}
export const getDato = async (req, res) => {
    try {
        const [rows] = await conexion.query("SELECT * FROM t_anime WHERE id_anime = ?", [req.params.id]);
        // const {nombre, edad, carrera} = req.body
        if (rows.length <= 0) {
            res.status(500).json({ mensaje: "datos no localizados" })
        } else {
            res.status(202).json(rows[0])
        }
    } catch (error) {
        res.status(500).json({ mensaje: "Error de servidor" })
    }
}

export const createDatos = async (req, res) => {
    const { titulo, descripcion, genero } = req.body
    try {
        if (titulo && descripcion && genero) {
            const [rows] = await conexion.query('INSERT INTO t_anime (titulo, descripcion, genero) VALUES (?,?,?)', [titulo, descripcion, genero]);
            res.status(202).json({
                id: rows.insertId,
                titulo: titulo,
                descripcion: descripcion,
                genero: genero
            })
        } else {
            res.status(500).json({ mensaje: "Error de servidor" })
        }
    } catch (error) {
        res.status(500).json({ mensaje: "error de servidor" })
    }
}

export const updateDatos = async (req, res) => {
    const { titulo, descripcion, genero } = req.body
    try {
        const [result] = await conexion.query('UPDATE t_anime SET titulo=IFNULL(?,titulo), descripcion=IFNULL(?,descripcion), genero=IFNULL(?,genero) WHERE id_anime = ?', [titulo, descripcion, genero, req.params.id]);
        if (result.affectedRows > 0) {
            res.status(202).json({ mensaje: "Datos actualizados" })
        } else {
            res.status(500).json({ mensaje: "Datos no localizados" })
        }
    } catch (error) {
        res.status(500).json({ mensaje: "error de servidor" })
    }
}
export const deleteDatos = async (req, res) => {
    try {
        const [result] = await conexion.query('DELETE FROM t_anime WHERE id_anime=?', [req.params.id]);
        if (result.affectedRows > 0) {
            res.status(202).json({ mensaje: "Datos eliminados" })
        } else {
            res.status(500).json({ mensaje: "error de servidor" })
        }
    } catch (error) {
        res.status(500).json({ mensaje: "error de servidor" })
    }
}

