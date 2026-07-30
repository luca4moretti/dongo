const express = require("express");

const controller = require(

    "../controllers/webhookController"

);

const router = express.Router();

router.post(

    "/payment",

    controller.paymentWebhook

);

router.post(

    "/refund",

    controller.refundWebhook

);

module.exports = router;
