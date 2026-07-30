const fs = require("fs");

exports.export = (

    transactions,

    filename

) => {

    const rows = [

        "InvoiceId,Amount,Currency,Status,Timestamp"

    ];

    transactions.forEach(item => {

        rows.push(

            [

                item.invoiceId,

                item.amount,

                item.currency,

                item.status,

                item.timestamp

            ].join(",")

        );

    });

    fs.writeFileSync(

        filename,

        rows.join("\n")

    );

};
