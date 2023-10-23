const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const PORT = process.env.PORT || 3006;

app.use(morgan("combined"));
app.use(
  "/bookingservice",
  createProxyMiddleware({
    target: "http://localhost:3002/",
    changeOrigin: true,
  })
);

app.get("/", (req, res) => {
  return res.json({
    msg: "ok",
  });
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
