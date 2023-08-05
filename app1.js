const express = require('express')
const app = express()
const port = 3000

const USERS = [
  {
    id: "1",
    email: "nptestid@gmail.com",
    password: "pass010101"
  }
];
const ADMINS = [
  {
    adminID: "01",
    email: "adminemail@gmail.com",
    password: "admin0101"
  }
  
];
const QUESTIONS = [{
    title: "Two states",
    description: "Given an array , return the maximum of the array?",
    testCases: [{
        input: "[1,2,3,4,5]",
        output: "5"
    }]
}];


const SUBMISSION = [
{
  userID : "1",
  questionTitle: "Two states",
  solution: "function(xyz)",
  isAccepted: "Accepted"
}
]
app.use(express.json());
app.post('/signup', function(req, res) {
  const {email, password} = req.body
  const existingUser = USERS.find((t)=> t.email === email);

  if(existingUser){
    res.status(401).send('Email is already registered. Please login')
  }
  const newUser = {
    id : Math.random() * 1e7,
    email : email,
    password : password
  };

  USERS.push(newUser)
  res.status(200).send('Account Created Successfully')

})

app.post('/login', function(req, res) {
  const {email, password} = req.body
  const user = USERS.find((u)=> u.email === email)

  if(!user){
   return res.send('User does not exist!')
  }
  else{
    const checkPassword = user.password === password;
    if(!checkPassword){
      res.status(401).send("Incorrect Password!")
    }
    res.status(200).send({token: user.id})

  }
})

app.get('/questions', function(req, res) {
  res.json(QUESTIONS);
})

app.get("/submissions/:title/userID/:userID", function (req, res) {
  const title = req.params.title;
  const userID = req.params.userID;
  const question = SUBMISSION.find(t => t.questionTitle === title && t.userID === userID);
  if(!question){
    return res.status(401).send("No submission done for this problem");
  }
  res.status(200).json(question);
});

app.post("/submissions", function(req, res) {
   const {userID, questionTitle, solution} = req.body
   const isAccepted = Math.random() > 0.5;
   const newSubmission = {
    userID : userID,
    questionTitle : questionTitle,
    solution: solution,
    isAccepted : isAccepted
   }
   if(!isAccepted){
    res.send('Incorrect Solution. Your submission was not accepted!')
   }
   else{
    return res.status(200).send('Submission has been successfully accepted!')
   }
});

// leaving as hard todos
// Create a route that lets an admin add a new problem
// ensure that only admins can do that.

app.post('/addquestion', (req,res)=>{
  const {adminID,title, description,testCases} = req.body
  const admin = ADMINS.find((a)=> a.adminID === adminID)
  
  if(!admin){
    res.status(401).send('Authorization Failed!. You are not an admin!')
  }
  const question = {
    title,
    description,
    testCases
  }
  QUESTIONS.push(question)
  return res.status(200).send('Question Successfully Added!')
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})