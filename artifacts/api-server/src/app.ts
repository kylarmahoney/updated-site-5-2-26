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
  // Try multiple candidate paths to locate the built frontend.
  // Railway CWD is /app/artifacts/api-server; __dirname is .../dist inside that.
  const candidates = [
    path.resolve(__dirname, "../../mahoney-tech/dist/public"),
    path.resolve(process.cwd(), "../mahoney-tech/dist/public"),
    path.resolve(process.cwd(), "artifacts/mahoney-tech/dist/public"),
  ];
  const staticPath = candidates.find(existsSync);
  if (staticPath) {
    app.use(express.static(staticPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(staticPath, "index.html"));
    });
    logger.info({ staticPath }, "Serving static frontend files");
  } else {
    logger.warn({ candidates }, "Static path not found — frontend not served");
  }
}

export default app;
