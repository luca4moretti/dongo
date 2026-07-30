class Invoice {

    constructor(

        id,

        customer,

        amount,

        currency

    ) {

        this.id = id;

        this.customer = customer;

        this.amount = amount;

        this.currency = currency;

        this.status = "PENDING";

        this.createdAt =

            new Date().toISOString();

    }

}

module.exports = Invoice;
