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

app.post('/login', (req, res) => {
    // Extract username and password from the request body
    const { email, pass } = req.body;
    // Here you would typically validate the credentials
    // For demonstration, let's just redirect to a success page

    // Since you don't have a specific success page, let's just send a simple response
    res.send('Form submitted');
    // Or, if you had a success page, you would use:
    // res.sendFile(html_path + 'success.html');
});


app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));