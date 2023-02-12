const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'challengedb'
}
const connection = mysql.createConnection(config)
connection.connect((err) => {
    if (err) 
        throw err
});
connection.query('CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id));')

let html = ""

app.get('/', (req, res) =>{
    html = '<h1>Full Cycle Rocks!</h1>'
    html += '<h3>Lista de nomes cadastrados no banco de dados</h3>'

    connection.query(`INSERT INTO people(name) VALUES ('Claudio');`)
    connection.query("SELECT name FROM people", function (err, result, fields) {
        html += '<ul>'
        for(let i = 0; i < result.length; i++){
            html += '<li>' + result[i].name + '</li>'            
        }
        html += '</ul>'

        res.send(html)
      });
})

app.listen(port, () =>{
    console.log('Rodando na porta ' + port)
})