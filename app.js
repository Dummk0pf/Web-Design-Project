const express = require("express");
const connectToDB = require("./server");

const app = express();
connectToDB();

app.listen(process.env.PORT, "127.0.0.1", () => {
    console.log(`Listening to ${process.env.PORT}`);
});
