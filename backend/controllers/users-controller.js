const HttpError = require("../models/http-error");

const uuid = require("uuid").v4;

let DUMMY_USERS = [
  {
    id: "u1",
    name: "JD",
    email: "jd@placebook.com",
    password: "123456",
  },
  {
    id: "u2",
    name: "Bhavana",
    email: "bhavana@placebook.com",
    password: "123456",
  },
  {
    id: "u3",
    name: "Vishal",
    email: "vishal@placebook.com",
    password: "123456",
  },
];

const getAllUsers = (request, response, next) => {
  response.json({ users: DUMMY_USERS });
};

const signUp = (request, response, next) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    throw new HttpError(
      "Could not Sign Up, input data doesn't match validation requirements.",
      422
    );
  }

  const { name, email, password } = request.body;

  const alreadyExist = DUMMY_USERS.find((u) => u.email === email);

  if (alreadyExist) {
    throw new HttpError(
      "User with this email address already exist, please use a different email address.",
      422
    );
  }

  const newUser = {
    id: uuid(),
    name,
    email,
    password,
  };
  DUMMY_USERS.push(newUser);
  response.status(201).json({ user: newUser });
};

const signIn = (request, response, next) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    throw new HttpError(
      "Could not Sign Up, input data doesn't match validation requirements.",
      422
    );
  }

  const { email, password } = request.body;

  const user = DUMMY_USERS.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    throw new HttpError("Failed to sign in, invalid credentials.", 401);
  }

  response.json({ message: "Signed in successfully." });
};

module.exports = {
  getAllUsers,
  signIn,
  signUp,
};
