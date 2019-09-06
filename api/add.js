const fs = require('fs');

const add = (req, res)=>{
    const contents = req.body.contents;
    const deadline = req.body.deadline;

    const dataCheck = ()=>{
        return new Promise((resolve, reject)=>{
            if(!contents || !deadline){
                if(!contents){
                    reject({code : 'empty_param', data : 'contents'});
                }
                else if(!deadline){
                    reject({code : 'empty_param', data : 'deadline'});
                }
            }
            resolve();
        });
    }

    const getTodo = ()=>{
        return new Promise((resolve, reject)=>{
            let todo;
            fs.readFile('./todo.json', (err, data)=>{
                if(err){
                    throw err;
                }
                else{
                    todo = JSON.parse(data);
                    resolve(todo);
                }
            });
        });
    }

    const addTodo = (todo)=>{
        return new Promise((resolve, reject)=>{
            todo.contents = contents;
            todo.deadline = deadline;

            fs.writeFile('./todo.json', todo ,(err)=>{
                if(err){
                    throw err;
                }
            });
            resolve(todo);
        });
    }

    dataCheck()
    .then(getTodo)
    .then(addTodo)
    .then((todo)=>{
        res.status(200).json(todo);
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json(err);
    })
}

module.exports = add;