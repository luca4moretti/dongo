const invoiceService = require(

    "../services/invoiceService"

);

exports.createInvoice = (req, res) => {

    const invoice =

        invoiceService.create(

            req.body

        );

    res.status(201).json(invoice);

};

exports.getInvoices = (req, res) => {

    res.json(

        invoiceService.all()

    );

};

exports.getInvoice = (req, res) => {

    const invoice =

        invoiceService.find(

            req.params.id

        );

    if (!invoice) {

        return res.status(404).json({

            error: "Invoice not found"

        });

    }

    res.json(invoice);

};
