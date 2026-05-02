import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import path from "path";
import { existsSync } from "fs";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

if (process.env.NODE_ENV === "production") {
  // __dirname is set by the esbuild banner to the dist/ folder of api-server.
  // From dist/ we go up two levels to reach artifacts/, then into mahoney-tech.
  const staticPath = path.resolve(__dirname, "../../mahoney-tech/dist/public");
  if (existsSync(staticPath)) {
    app.use(express.static(staticPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(staticPath, "index.html"));
    });
    logger.info({ staticPath }, "Serving static frontend files");
  } else {
    logger.warn({ staticPath }, "Static path not found — frontend not served");
  }
}

export default app;
