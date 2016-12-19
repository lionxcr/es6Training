import express from 'express';
import fs from 'fs';

(async () => {
    try{
        const port = 8080;
        const app = express();
        const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        app.listen(port);
        app.use('/', (req, res) => {
        	res.send(data);
        });

    }catch(e){
        console.log(e);
    }

})();