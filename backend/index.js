const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoute = require("./routers/auth.route");
const cartRoute = require("./routers/cart.route");
const checkoutRoute = require("./routers/checkout.route");
const productRoute = require("./routers/product.route");
const customerRoute = require("./routers/customer.route");
const orderRoute = require("./routers/order.route");

const connectToDatabase = require("./config/database.config");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

connectToDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/customer", customerRoute);
app.use("/api/v1/cart", cartRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/checkout", checkoutRoute);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
