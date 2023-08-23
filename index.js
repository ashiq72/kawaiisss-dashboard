const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();

// middleware

app.use(cors());
app.use(express.json());

// const uri = `mongodb+srv://${process.env.db_USER}:${process.env.DB_PASS}@cluster0.yrvrisu.mongodb.net/?retryWrites=true&w=majority`;
const uri = `mongodb+srv://ahmedashik19k:6x22k8KoHrbz11hj@cluster0.cygdmom.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const womensCollection = client.db("kawaii").collection("women");
    const allproductsCollection = client
      .db("kawaii")
      .collection("all-products");

    app.get("/womens", async (req, res) => {
      const query = {};
      const products = await womensCollection.find(query).toArray();
      res.send(products);
    });
    app.get("/allproducts", async (req, res) => {
      const query = {};
      const products = await allproductsCollection.find(query).toArray();
      res.send(products);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", async (req, res) => {
  res.send("doctors portal server is running");
});

app.listen(port, () => console.log(`Server ${port}`));
