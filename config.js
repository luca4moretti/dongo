module.exports = {

    port: 3000,

    apiVersion: "v1",

    webhookDelay: 1500,

    currency: "USDC",

    storage: {

        invoices: "./storage/invoices.json",

        transactions: "./storage/transactions.json"

    }

};
