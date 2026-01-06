const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const showsRoutes = require("./routes/showsRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/shows", showsRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "TV Program API Server",
    endpoints: {
      shows: {
        "GET /api/shows?duration=30": "getAllShowsByDuration()",
        "POST /api/shows": "addShow()",
        "PUT /api/shows/:id": "editShow()",
        "DELETE /api/shows?showID=1": "deleteShow() (query param)",
      },
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
