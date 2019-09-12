const fs = require('fs');
const edit = (req, res)=>{
    const id = req.body.id;
    const new_contents = req.body.contents;
    const new_deadline = req.body.deadline;

    const checkData = ()=>{
        return new Promise((resolve, reject)=>{
            if(!new_contents || !new_deadline){
                if(!new_contents){
                    console.log('contents reject');
                    reject({code : 'empty_param', data : 'contents'});
                }
                else if(!new_deadline){
                    console.log('deadline reject');
                    reject({code : 'empty_param', data : 'deadline'});
                }
            }
            resolve();
        });
    }

    const getTodo = ()=>{
        return new Promise((resolve, reject)=>{
            fs.readFile('./todo.json', (err,data)=>{
                if(err) throw err;
                resolve(JSON.parse(data));
            });
        });
    }

    const editTodo = (todo)=>{
        return new Promise((resolve, reject)=>{
            const rows = todo.rows;
            for(let i = 0; i < rows.length; i++){
                if(rows[i].id == id){
                    rows[i].contents = new_contents;
                    rows[i].deadline = new_deadline;
                }
            }
            resolve(todo);
        });
    }

    const editTodoJson = (todo)=>{
        return new Promise((resolve, reject)=>{
            const data = JSON.stringify(todo, null, 4);
            fs.writeFile('./todo.json', data, (err)=>{
                if(err) throw err;
            });
            resolve(data);
        });
    }

    checkData()
    .then(getTodo)
    .then(editTodo)
    .then(editTodoJson)
    .then((data)=>{
        res.status(200).json(data);
    })
    .catch((reason)=>{
        res.status(500).json(reason);
    })
};

module.exports = edit;