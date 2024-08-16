"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var movieRoutes_1 = require("./routes/movieRoutes");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/movies', movieRoutes_1.default);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
