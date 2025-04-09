import express, {Express} from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();

const app:Express = express();
const port:number = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
});
