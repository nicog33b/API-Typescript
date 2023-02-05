import "dotenv/config";
import express from "express";
import cors from "cors";
const PORT = process.env.PORT || 3001;
const app = express();
//con cors definimos que dominios pueden acceder a nuestra api y que tipo de acceso tienen(get,put,post).
app.use(cors());

app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`))