import express from "express";
import cors from "cors"
import cursesRouter from "./Routes/cursesRouter.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(cursesRouter);


app.listen(5001, ()=>{
    console.log("Servidor rodando na porta 5001");
});