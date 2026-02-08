import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    service: "catudy-server",
    time: new Date().toISOString(),
  });
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.listen(PORT, () => {
  console.log(`[catudy-server] listening on http://localhost:${PORT}`);
});
