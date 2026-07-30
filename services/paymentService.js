const logger = require(

    "./transactionLogger"

);

exports.complete = (

    invoice

) => {

    invoice.status = "PAID";

    invoice.paidAt =

        new Date().toISOString();

    logger.record({

        invoiceId: invoice.id,

        amount: invoice.amount,

        currency: invoice.currency,

        status: invoice.status

    });

    return invoice;

};

exports.refund = (

    invoice

) => {

    invoice.status = "REFUNDED";

    logger.record({

        invoiceId: invoice.id,

        amount: invoice.amount,

        currency: invoice.currency,

        status: invoice.status

    });

    return invoice;

};
