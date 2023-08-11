const express = require("express");
const app = express();
const port = process.env.port || 3000;
var jwt = require("jsonwebtoken");
const { auth } = require("./middleware");
let USER_ID_COUNTER = 1;
const JWT_SECRET = "secret";
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const cors = require("cors");
const mongoose = require( 'mongoose')
const mongodbURI = require("./constants");
app.use(cors());
app.use(jsonParser);

const ProblemsModel = require("./models/Problems")
const UserModel = require("./models/User")
const SubmissionsModel = require("./models/Submissions")


app.use(cors(
  {
    origin: ["https://leet-code-clone-beta.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
  }
));


mongoose.connect(mongodbURI)
  .then( () => {
      console.log('Connected to the database ')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. n${err}`);
  })


app.get("/", (req, res) => {
  res.json({
    msg: "hello world",
  });
});

app.get("/api/dashboard", async (req, res) => {
	const filteredProblems = await ProblemsModel.find();

	res.json({
		problems: filteredProblems,
	});
});

  


app.get("/api/problem/:id", async (req, res) => {
  const id = req.params.id;

  const problem = await ProblemsModel.findOne({ problemId: id });


  if (!problem) {
    return res.status(404).json({ error: "Problem Not Found" });
  }

  res.json({
    problem,
  });
});

app.get("/api/me", auth, async (req, res) => {
  const user = await UserModel.findOne({ userId: req.userId });
	res.json({ user });
});

app.get("/api/submissions/:problemId", auth, async (req, res) => {
  const problemId = req.params.problemId;
  const submissions = await SubmissionsModel.find({
		problemId: problemId,
		userId: req.userId,
	});
  res.json({
    submissions,
  });
});

app.post("/api/submission", auth, async (req, res) => {
	const isCorrect = Math.random() < 0.5;
	const { problemId, submission } = req.body;
	let status = isCorrect ? "AC" : "WA";

	const newSubmission = new SubmissionsModel({
		submission: submission,
		problemId: problemId,
		userId: req.userId,
		status: status,
	});

	await newSubmission.save();
	return res.json({
		status: status,
	});
});

app.post("/api/signup", async (req, res) => {
	console.log(req.body);
	try {
		const existingEmail = await UserModel.findOne({
			email: req.body.email,
		});
		if (existingEmail) {
			return res.status(409).json({ message: "Email already exists!" });
		}

		const newUser = new UserModel({
			email: req.body.email,
			password: req.body.password,
		});

		await newUser.save();

		console.log("User created!");
		console.log(newUser.toJSON());
		return res.json({
			msg: "Success",
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Server error" });
	}
});
app.post("/api/login", async (req, res) => {
	console.log(req.body);
	try {
		const email = req.body.email;
		const password = req.body.password;
		const user = await UserModel.findOne({
			name: req.body.username,
		});
		if (!user) {
			return res.status(403).json({ msg: "User not found" });
		}

		const isMatch = await user.comparePassword(req.body.password);
		if (!isMatch) {
			return res.status(403).json({ msg: "Incorrect password" });
		}

		const token = jwt.sign(
			{
				id: user.userId,
			},
			JWT_SECRET
		);

		console.log("User logged in!");
		console.log(req.body.username);
		res.status(200).json({
			message: "Logged in successfully!",
			token: token,
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Server error" });
	}
  return res.json({ token });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

