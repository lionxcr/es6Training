import express from 'express';
import fs from 'fs';

(async () => {
    try{
        const port = 8080;
        const app = express();
        const data = JSON.parse(fs.readFileSync('file', 'utf8'));
        console.log(data);
        app.use('/' (req, res) => {
        	res.render('hello world');
        });

    }catch(e){
        console.log(e);
    }

})();