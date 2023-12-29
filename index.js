import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));


app.set();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});


app.listen(port, () => {
    console.log('Your server is started..');
});
