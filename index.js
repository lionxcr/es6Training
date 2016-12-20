import express from 'express';
import fs from 'fs';
import Master from './classes/Master';
import Pupilo from './classes/Pupilo';
import BlackList from './classes/BlackList';
import ZapoList from './classes/ZapoList';

(async () => {
    try{
        const port = 8080;
        const app = express();
        
        let master1 = new Master('Migue', 66, 'ガンダマー', true);
        let pupilo1 = new Pupilo('kohai', 25, 200);

        const data = [ master1 , pupilo1 ];
        app.listen(port);
        app.use('/', (req, res) => {
        	res.send(data);
        });

    }catch(e){
        console.log(e);
    }

})();