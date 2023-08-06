import express from "express";
import "dotenv/config";

import routerConfig from "./routes/index.js";
import databaseConfig from "./config/database.js";

const PORT = process.env.PORT;

const app = express();

databaseConfig();
app.use(express.json());
app.use("/api/v1", routerConfig());

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
