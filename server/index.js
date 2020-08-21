require("dotenv").config();
const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env,
  express = require("express"),
  massive = require("massive"),
  session = require("express-session");

const authCtrl = require("./authController");
const cartCtrl = require("./cartController");
const productCtrl = require("./productController");

const app = express();

//#top level middleware
app.use(express.json());
//# this lets us use session in our req object
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30,
    },
  })
);

//#database connection setup
massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    app.set("db", db);
    console.log("<-----Database Online----->");
  })
  .catch((err) => console.log(`Database error: ${err}`));

//# AUTH ENDPOINTS
app.post("/auth/register", authCtrl.register);
app.post("/auth/login", authCtrl.login);
app.post("/auth/logout", authCtrl.logout);
app.get("/auth/user", authCtrl.getUser);

//# PRODUCT ENDPOINTS
app.get("/api/products", productCtrl.getProducts);
//   app.get('/api/products/:id')
app.post("/api/products", productCtrl.addProduct);
app.put("/api/products/:id", productCtrl.editProduct);
app.delete("/api/products/:id", productCtrl.deleteProduct);

//# CART ENDPOINTS
app.get("/api/cart");
app.post("/api/cart/:id");
app.delete("/api/cart");

app.listen(SERVER_PORT, () => console.log(`<-----Server Online----->`));
