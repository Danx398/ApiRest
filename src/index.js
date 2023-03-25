import app from "./app.js";
app.listen(app.get('port'),()=>{
    console.log(`Servidor ejecutandose en el puerto: ${app.get('port')}`);
})

