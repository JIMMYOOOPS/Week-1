const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000

app.use(express.static('public'));
app.set('view engine', 'pug');
app.use(express.urlencoded( {extended: true} ));
app.use(express.json());

//Create connection
const db = mysql.createConnection(
    {
        host: 'localhost' ,
        user: 'root' ,
        password: 'jimmy85030',
        database: 'assignment'
    }
);

//Connect
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('Mysql connected')
});

//Create DB
app.get('/database', (req, res) => {
    let sql = 'CREATE DATABASE assignment';
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        } else {
        console.log(result)
        res.send('The Database has been created')
        }
    });
});

//Create table
app.get('/usertable', (req, res) => {
    let sql = 'CREATE TABLE user(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id), CONSTRAINT email_unique UNIQUE (email))';
    db.query(sql, (err,result) => {
        if(err) {
            throw err;
        } else {
            console.log(result);
            res.send('The user table is created')
        }
    })
});


//Signin page(homepage)
app.get('/', (req, res) => {
    res.render('index')
})

//User Login
app.post('/', (req, res) => {
    let sql = `SELECT * FROM user WHERE email= '${req.body.user.email}' AND password= '${req.body.user.password}'`
    db.query(sql, (err, rows, result) => {
        if(err) {
            throw err;
        } else if (rows.length === 0) {
            return res.render('index', {error: 'User does not exist' } );
        } else {
            res.redirect('http://localhost:3000/member');
        }
    })
})

//Signup page
app.get('/signup', (req, res) => {
    res.render('signup')
})

//User Signup
app.post('/signup', (req, res) => {
    let post = {
        email: `${req.body.user.email}`,
        password: `${req.body.user.password}`
    };
    let sql = 'INSERT INTO user SET ?'
    db.query(sql, post, (err,field) => {
        if(!err) {
            res.render('member');
        } else if (err.errno == 1062) {
        return res.render('signup', {error: 'The email has already been used' })             
        } else {
            throw err;
        }
    });
});

//Memberpage
app.get('/member', (req, res) => {
    res.render('member')
})

//Select all users
app.get('/users', (req, res) => {
    let sql = 'SELECT * FROM user';
    let query = db.query(sql, (err, results) => {
        if (err) {
            throw err;
        } else {
            console.log(results)
        }
        res.send('Users fetched')
    })
})

//Select user by :id
app.get('/user/:id', (req, res) => {
    let sql = `SELECT * FROM user WHERE id = ${req.body.user.username}`;
    let query = db.query(sql, (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log(result)
        }
        res.send('User fetched')
    })
})

//Delete user by :id
app.delete('/user/:id', (req, res) => {
    let sql = `DELETE FROM user WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log(result)
        }
        res.send('User is deleted')
    })
})

app.listen(3000, () => {
    console.log(`Listening to Port ${port}`);
});


