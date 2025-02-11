import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorManager from "./middlewares/errorManager.js";
import manager404 from "./middlewares/manager404.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
    console.log("conexão com o banco feita com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

app.use(manager404);
app.use(errorManager);

export default app;