const simulator = require(

    "../services/webhookSimulator"

);

exports.paymentWebhook = (

    req,

    res

) => {

    const result =

        simulator.payment(

            req.body

        );

    res.json(result);

};

exports.refundWebhook = (

    req,

    res

) => {

    const result =

        simulator.refund(

            req.body

        );

    res.json(result);

};
