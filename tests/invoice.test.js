const invoiceService = require(

    "../services/invoiceService"

);

test(

    "create invoice",

    () => {

        const invoice =

            invoiceService.create({

                customer: "Alice",

                amount: 250

            });

        expect(

            invoice.customer

        ).toBe("Alice");

        expect(

            invoice.status

        ).toBe("PENDING");

    }

);
