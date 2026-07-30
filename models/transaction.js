class Transaction {

    constructor(data) {

        this.invoiceId =

            data.invoiceId;

        this.amount =

            data.amount;

        this.currency =

            data.currency;

        this.status =

            data.status;

        this.timestamp =

            new Date().toISOString();

    }

}

module.exports = Transaction;
