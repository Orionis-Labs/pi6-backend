import { Express, Request, Response, NextFunction } from "express";

const routes = (app: Express) => {
  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello");
  });
};

export default routes;
