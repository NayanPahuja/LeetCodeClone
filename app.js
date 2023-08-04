const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        secret: 'SigmaMales',
        resave: false,
        saveUninitialized: true,
    })
);
app.set('view engine', 'ejs');

// Dummy database
const users = [];

const QUESTIONS = [{
    title: "Two states",
    id : 1,
    description: "Given an array , return the maximum of the array?",
    testCases: [{
        input: "[1,2,3,4,5]",
        output: "5"
    }]
}];

const SUBMISSION = [

]

// Routes
app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/dashboard', (req, res) => {
    // Check if the user is logged in
    if (req.session.user) {
        res.render('dashboard', { user: req.session.user });
    } else {
        res.redirect('/login');
    }
});

// Login functionality
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        req.session.user = user;
        res.redirect('/dashboard');
    } else {
        res.send('Invalid Username or Password');
    }
});

// Register functionality
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Check if username already exists
    const existingUser = users.find((u) => u.username === username);

    // If user already exists
    if (existingUser) {
        res.send('Username already exists!. Please try again');
    } else {
        const newUser = { username, password };
        users.push(newUser);
        req.session.user = newUser; // Use single "=" for assignment
        res.redirect('/dashboard');
    }
});

 app.get('/submissions', function(req,res){
    const problemTitle = question
 })
 app.post("/submissions", function(req, res) {
    const {solution} = req.body
    const isAccepted = Math.random() < 0.5
    const newSubmission = {
        solution,
        isAccepted
    };
    SUBMISSION.push(newSubmission);

    res.json({ isAccepted });
    // Store the submission in the SUBMISSION array above
 });

// Logout functionality
app.get('/logout', (req, res) => {
    req.session.destroy(); // Destroy the session, logging the user out
    res.redirect('/login'); // Redirect to the login page
});

app.get('/questions', (req,res) =>{
    res.render('questions', {questions : QUESTIONS})
})
// Run the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
