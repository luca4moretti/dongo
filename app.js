const express = require("express");

const config = require("./config");

const invoiceRoutes = require("./routes/invoiceRoutes");

const webhookRoutes = require("./routes/webhookRoutes");

const logger = require("./middleware/logger");

const app = express();

app.use(express.json());

app.use(logger);

app.use(

    "/api/invoices",

    invoiceRoutes

);

app.use(

    "/api/webhooks",

    webhookRoutes

);

app.get("/", (req, res) => {

    res.json({

        application: "Circle Payment Simulator",

        version: "1.0.0",

        status: "running"

    });

});

app.listen(

    config.port,

    () => {

        console.log(

            `Simulator listening on ${config.port}`

        );

    }

);
