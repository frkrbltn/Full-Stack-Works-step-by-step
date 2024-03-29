const express = require("express");
const multer = require("multer");
const upload = multer({dest: 'file_uploads/'});


const app = express();

const PORT = 3001;

const html_path = __dirname + '/templates/' // HTML files folder


app.use(express.static('static'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(html_path + 'index.html');
});
  
app.get('/login', (req, res) => {
    res.sendFile(html_path + 'login.html');
});


app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));