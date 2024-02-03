const fs = require("fs");
const express = require("express");
const connectToDB = require("./server");
const updateDetails = require("./models/accessories");

const app = express();
connectToDB();

app.use("/v1/home", function (req, res) {
    updateDetails.expansionCardsImport();
    // updateDetails.inputModulesImport();
    // updateDetails.memoryImport();
    // updateDetails.operatingSystemImport();
    // updateDetails.primaryStorageImport();
    // updateDetails.secondaryStorageImport();
    // updateDetails.processorImport();
    res.status(200).json({
        status: "Success",
        message: "Success",
    });
});

app.listen(process.env.PORT, "127.0.0.1", () => {
    console.log(`Listening to ${process.env.PORT}`);
});
