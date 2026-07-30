const { randomUUID } = require("uuid");

const invoices = [];

exports.create = (payload) => {

    const invoice = {

        id: randomUUID(),

        customer:

            payload.customer,

        amount:

            payload.amount,

        currency:

            payload.currency || "USDC",

        status: "PENDING",

        createdAt:

            new Date().toISOString()

    };

    invoices.push(invoice);

    return invoice;

};

exports.all = () => {

    return invoices;

};

exports.find = (id) => {

    return invoices.find(

        invoice => invoice.id === id

    );

};
