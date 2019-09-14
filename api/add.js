const fs = require('fs');

const add = (req, res)=>{
    const contents = req.body.contents;
    const deadline = req.body.deadline;

    const dataCheck = ()=>{
        return new Promise((resolve, reject)=>{
            if(!contents || !deadline){
                if(!contents){
                    console.log('contents reject');
                    reject({code : 'empty_param', data : 'contents'});
                }
                else if(!deadline){
                    console.log('deadline reject');
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
            const newtodo = {
                'id' : todo.count,
                'contents' : contents,
                'deadline' : deadline
            };
            todo.rows.push(newtodo);
            todo.count++;
            resolve(todo);
        });
    }

    const addTodoJson = (todo)=>{
        return new Promise((resolve, reject)=>{
            fs.writeFile('./todo.json', JSON.stringify(todo, null, 4),(err)=>{
                if(err) throw err;
            });
            resolve(todo);
        });
        
    }

    dataCheck()
    .then(getTodo)
    .then(addTodo)
    .then(addTodoJson)
    .then((todo)=>{
        res.status(200).json(todo);
    })
    .catch((err)=>{
        res.status(500).json(err);
    })
}

module.exports = add;