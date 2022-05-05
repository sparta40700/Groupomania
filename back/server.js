const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes.js");
const postRoutes = require("./routes/post.routes.js");
const { path } = require("express/lib/application");
require("dotenv").config({ path: "./.env" });
require("./config/db");
const { checkUser } = require("./middleware/auth.middleware");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  optionsSuccessStatus: 200,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  preflightContinue: false,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

//routes
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

//serveur
app.listen(process.env.PORT, () => {
  console.log("Server started on port " + process.env.PORT);
});
