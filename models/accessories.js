const mongoose = require("mongoose");
const fs = require("fs");

const productSchema = new mongoose.Schema({
    productId: {
        type: Number,
        required: [true, "Product Id must be specified"],
    },
    productName: {
        type: String,
        required: [true, "Product Name must be specified"],
        trim: true,
    },
    productDetails: {
        type: String,
        trim: true,
    },
    productPrice: {
        type: Number,
        required: [true, "Product Price must be specified"],
        trim: true,
    },
    productImage: {
        type: String,
        required: [true, "Product Image path must be specified"],
        trim: true,
    },
});

const Bezel = mongoose.model("bezel", productSchema);
const ExpansionCards = mongoose.model("expansioncard", productSchema);
const InputModules = mongoose.model("inputmodule", productSchema);
const Memory = mongoose.model("memory", productSchema);
const OperatingSystem = mongoose.model("operatingsystem", productSchema);
const PrimaryStorage = mongoose.model("primarystorage", productSchema);
const SecondaryStorage = mongoose.model("secondarystorage", productSchema);
const Processor = mongoose.model("processor", productSchema);

exports.bezelImport = function () {
    const details = fs.readFileSync(`./dataDump/bezelDetails.json`);
    const data = JSON.parse(details);
    Bezel.create(data);
};

exports.expansionCardsImport = function () {
    const details = fs.readFileSync(`./dataDump/expansionCardsDetails.json`);
    const data = JSON.parse(details);
    ExpansionCards.create(data);
};

exports.inputModulesImport = function () {
    const details = fs.readFileSync(`./dataDump/inpuModulesDetails.json`);
    const data = JSON.parse(details);
    InputModules.create(data);
};

exports.memoryImport = function () {
    const details = fs.readFileSync(`./dataDump/memoryDetails.json`);
    const data = JSON.parse(details);
    Memory.create(data);
};

exports.operatingSystemImport = function () {
    const details = fs.readFileSync(`./dataDump/operatingSystemDetails.json`);
    const data = JSON.parse(details);
    OperatingSystem.create(data);
};

exports.primaryStorageImport = function () {
    const details = fs.readFileSync(`./dataDump/primaryStorage.json`);
    const data = JSON.parse(details);
    PrimaryStorage.create(data);
};

exports.secondaryStorageImport = function () {
    const details = fs.readFileSync(`./dataDump/secondaryStorage.json`);
    const data = JSON.parse(details);
    SecondaryStorage.create(data);
};

exports.processorImport = function () {
    const details = fs.readFileSync(`./dataDump/processorDetails.json`);
    const data = JSON.parse(details);
    Processor.create(data);
};
