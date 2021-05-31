const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const parser = require("body-parser");
app.use(parser.json());

const MongoClientA = require("mongodb").MongoClient;
const createRouterA = require("./helpers/create_router_a.js");
MongoClientA.connect("mongodb://localhost:27017")
  .then((client) => {
    const db = client.db("locations_edinburgh");
    const businessCollection = db.collection("businesses");
    const businessRouter = createRouterA(businessCollection);
    app.use("/api/businesses", businessRouter);
  })
  .catch(console.err);

const MongoClientB = require("mongodb").MongoClient;
const createRouterB = require("./helpers/create_router_a.js");
// Not sure how the localhost would work here...?
MongoClientB.connect("mongodb://localhost:27018")
  .then((client) => {
    const db = client.db("locations_edinburgh");
    const userReviewsCollection = db.collection("user_reviews");
    const userReviewsRouter = createRouterB(userReviewsCollection);
    app.use("/api/user_reviews", userReviewsRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
