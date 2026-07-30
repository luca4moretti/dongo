const invoiceService = require(

    "./invoiceService"

);

const paymentService = require(

    "./paymentService"

);

exports.payment = (payload) => {

    const invoice =

        invoiceService.find(

            payload.invoiceId

        );

    if (!invoice) {

        return {

            success: false,

            message: "Invoice not found"

        };

    }

    paymentService.complete(

        invoice

    );

    return {

        success: true,

        event: "payment.completed",

        invoice

    };

};

exports.refund = (payload) => {

    const invoice =

        invoiceService.find(

            payload.invoiceId

        );

    if (!invoice) {

        return {

            success: false,

            message: "Invoice not found"

        };

    }

    paymentService.refund(

        invoice

    );

    return {

        success: true,

        event: "payment.refunded",

        invoice

    };

};
