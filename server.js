const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, path.basename(file.originalname) + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage }).array('images');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.write('Home');
    res.end();
});

app.get('/images/:name', (req, res) => {
    const name = req.params.name;
    res.sendFile(__dirname + `/uploads/${name}`);
});

app.post('/upload', (req, res) => {
    upload(req, res, error => {
        if (error) {
            console.log(error);
        } else {
            console.log('upload file success');
        }
    });
});

app.listen(5000, () => {
    console.log('Server is running on port: 5000');
});