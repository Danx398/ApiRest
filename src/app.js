import express from "express"; 
import routes from './routes/index.routes.js';
import { PORT } from "./config.js";
const app = express();
app.set('port', PORT);
app.use(express.json())
app.use('/api/haruka',routes);

app.use((req,res)=>{
    res.status(404).json({"Mensaje_error":"Pagina no localizada"});
});
export default app;