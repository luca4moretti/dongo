const transactions = [];

exports.record = (transaction) => {

    transactions.push({

        ...transaction,

        timestamp:

            new Date().toISOString()

    });

};

exports.all = () => {

    return transactions;

};

exports.count = () => {

    return transactions.length;

};
