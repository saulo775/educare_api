import db from "../db.js";


export async function getAllCourses(req, res) {
    try {
        const allCourses = await db.collection("cursos").find().toArray();
        res.status(200).send(allCourses);
    } catch (e) {
        console.log("Impossível buscar os cursos", e);
        res.status(500).send(e);
    }
}