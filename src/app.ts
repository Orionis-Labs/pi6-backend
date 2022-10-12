import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import routes from "./routes";

const app = express();

app.use(helmet());

app.use(express.json());

routes(app);

app.listen(3000, () => {
  console.log("App is listening on http://localhost:3000");
});
