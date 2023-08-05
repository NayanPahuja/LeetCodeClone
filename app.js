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
        res.status(200).send({token: user.id})
    } else {
        res.status(401).send('Invalid Username or Password');
    }
});

// Register functionality
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Check if username already exists
    const existingUser = users.find((u) => u.username === username);

    // If user already exists
    if (existingUser) {
        res.status(401).send('Username already exists!. Please try again');
    } else {
        const newUser = { id : Math.random() * 1e7, username: username, password : password };
        users.push(newUser);
        req.session.user = newUser; // Use single "=" for assignment
        res.status(200).redirect('/dashboard');
    }
});

app.get('/submissions/:questionId', (req, res) => {
    const { questionId } = req.params;
  
    // Find the question by ID in the QUESTIONS array
    const question = QUESTIONS.find((q) => q.id === questionId);
  
    if (!question) {
      // If the question is not found, send an error response
      return res.status(404).send('Question not found.');
    }
  
    // Filter the submissions array to get submissions for the specific question
    const questionSubmissions = SUBMISSION.filter((submission) => submission.questionID === questionId);
  
    // Render the submissions page with the question and its submissions
    res.render('submissionsUI', { question : QUESTIONS, submissions: questionSubmissions });
  });
  
 app.post("/submissions", function (req, res) {
    const { questionID, solution } = req.body;
    const questions = QUESTIONS.find((q) => q.id === questionID);
  
    if (!questions) {
      // If the question is not found, send an error response
      return res.status(404).send('Question not found.');
    }
  
    const isAccepted = Math.random() < 0.5;
    const newSubmission = {
      questionID,
      solution,
      isAccepted
    };
  
    SUBMISSION.push(newSubmission);
  
    if (isAccepted) {
      res.render('submissionsUI')
    } else {
      res.send('Wrong Solution!. Try Again!');
    }
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
