import express from 'express';

(async () => {
    try{
        const port = 8080;
        const app = express();
        app.use('/' (req, res) => {
        	res.render('hello world');
        });

    }catch(e){
        console.log(e);
    }

})();