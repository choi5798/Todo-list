const fs = require('fs');

const list = (req, res)=>{
    const getJson = ()=>{
        return new Promise((resolve, reject)=>{
            fs.readFile('./todo.json', (err, data)=>{
                if(err) throw err;
                resolve(JSON.parse(data));
            });
        });
    };

    getJson()
    .then((data)=>{
        res.status(200).json(data);
    }   
    )
    .catch((reason)=>{
        res.status(500);
        res.send(reason);
    });
};

module.exports = list;