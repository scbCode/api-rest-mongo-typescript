import { app } from "./app";
import { MoongoDb } from "./providers/IMoondoDbProvider";
const bodyParser = require('body-parser')

app.listen(3333,()=>{console.log("online\n-----------------------------------------------------")})
new MoongoDb();
