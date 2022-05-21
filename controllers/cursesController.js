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

export async function getAllModules(req, res) {
    const {courseId} = req.params;
    console.log(courseId);
    if (!courseId) {
        return res.status(422).send("Id do curso não disponível");
    }

    try {
        const allModules = await db.collection("modulos").find({courseId}).toArray();
        res.status(200).send(allModules);
    } catch (e) {
        console.log("Impossível buscar os módulos do curso", e);
        res.status(500).send(e);
    }
}

export async function getAllModuleClasses(req, res) {
    const {moduleId} = req.params;
    if (!moduleId) {
        return res.status(422).send("Id do modulo não disponível");
    }

    try {
        const allModuleClasses = await db.collection("aulas").find({moduleId}).toArray();
        res.status(200).send(allModuleClasses);
    } catch (e) {
        console.log("Impossível buscar as aulas do modulos", e);
        res.status(500).send(e);
    }
}