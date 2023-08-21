const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv").config();
require("./models/db");
app.use(cors());
app.use(express.json());
const rolesRouter = require("./routes/rolesRouters");
const usersRouter = require("./routes/usersRouters");

const productsRouter = require("./routes/productsRouters");
const categRouters = require("./routes/categRouters");
const cartRouter = require("./routes/cartRouters")



app.use("/roles", rolesRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/categories", categRouters);
app.use("/cart",cartRouter)
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
