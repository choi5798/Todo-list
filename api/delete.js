const fs = require('fs');
const del = (req, res)=>{
    const id = req.body.id;

    const readTodo = ()=>{
        return new Promise((resolve, reject)=>{
            fs.readFile('./todo.json', (err, data)=>{
                if(err) throw err;
                resolve(JSON.parse(data));
            })
        })
    }

    const deleteTodo = (data)=>{
        return new Promise((resolve, reject)=>{
            const rows = data.rows;
            console.log(rows.length);
    
            const real_index = rows.findIndex((element)=>{
                return element.id == id;
            })
            rows.splice(real_index, 1); //
    
            console.log(rows.length);
            resolve(data);    
        })
    }

    const deleteTodoJson = (data)=>{
        return new Promise((resolve, reject)=>{
            const todo = JSON.stringify(data, null, 4);
            fs.writeFile('./todo.json', todo, (err)=>{
                if(err) throw err;
            })
            resolve(data);
        })
    }

    readTodo()
    .then(deleteTodo)
    .then(deleteTodoJson)
    .then((data)=>{
        res.status(200).json(data);
    })
    .catch((reason)=>{
        res.status(500).json(reason);
    })
}

module.exports = del;